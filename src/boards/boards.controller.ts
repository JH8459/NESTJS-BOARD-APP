import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards') // '/boards' 엔드포인트로 요청이 들어온 경우 (데코레이터 사용)
export class BoardsController {
  constructor(private boardsService: BoardsService) {} // 생성자 안에서 의존성 주입을 시행해준다

  @Get() // Get 요청 메서드일 경우 (데코레이터 사용)
  getAllBoard() {
    /* 모든 게시글을 가져오는 핸들러 */
    return this.boardsService.getAllBoards(); // boardsService 안에서 만든 getAllBoards() 메서드를 호출한다
  }
}
