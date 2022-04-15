import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards') // '/boards' 엔드포인트로 요청이 들어온 경우 (데코레이터 사용)
export class BoardsController {
  constructor(private boardsService: BoardsService) {} // 생성자 안에서 의존성 주입을 시행해준다

  @Get() // Get 요청 메서드일 경우 (데코레이터 사용)
  /* 모든 게시글을 가져오는 핸들러 */
  getAllBoard(): Board[] {
    // Board[] 형식으로 데이터 타입 선언
    return this.boardsService.getAllBoards(); // boardsService 안에서 만든 getAllBoards() 메서드를 호출한다
  }

  @Post() // Post 요청 메서드일 경우
  /* 게시물을 생성하는 핸들러(@Body body를 통해 요청에서 보내온 모든 body값을 가져올 수도 있다) */
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.boardsService.createBoard(title, description);
  }
}
