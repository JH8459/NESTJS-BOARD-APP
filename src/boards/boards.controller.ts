import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards') // '/boards' 엔드포인트로 요청이 들어온 경우 (데코레이터 사용)
export class BoardsController {
  constructor(private boardsService: BoardsService) {} // 생성자 안에서 의존성 주입을 시행해준다

  @Get() // '/'로 (생략가능) Get 요청 메서드일 경우
  /* 모든 게시글을 가져오는 핸들러 */
  getAllBoard(): Board[] {
    // Board[] 형식으로 데이터 타입 선언
    return this.boardsService.getAllBoards(); // boardsService 안에서 만든 getAllBoards() 메서드를 호출한다
  }

  @Post() // '/'로 Post 요청 메서드일 경우
  /* 게시물을 생성하는 핸들러(@Body body를 통해 요청에서 보내온 모든 body값을 가져올 수도 있다) */
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    // 바디로 받을 프로퍼티들은 DTO로 정의해서 전달인자로 사용한다
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id') // '/'로 Get 요청 메서드 중 id Param이 들어오는 경우
  /* 특정 ID 게시글을 가져오는 핸들러 */
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }
}
