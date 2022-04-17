import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // private를 사용하여 외부에서 접근 금지, Board[] 형식으로 데이터 타입 선언

  getAllBoards(): Board[] {
    // Board[] 형식으로 리턴값의 데이터 형식 선언
    return this.boards; // 모든 boards를 가져오는 Service
  }
  /* 전달인자로 CreateBoardDTO를 갖는 보드를 생성하는 createBoard Service 선언 */
  createBoard(createBoardDto: CreateBoardDto) {
    /* title과 description은 구조분해 할당으로 createBoardDto에서 꺼내어서 사용해준다 */
    const { title, description } = createBoardDto;
    /* 만들어질 board는 Board 모델을 타입을 따른다 */
    const board: Board = {
      id: uuid(), // uuid 모듈을 이용한 유니크한 ID값 선언
      title, // title: title,
      description, // description: description,
      status: BoardStatus.PUBLIC, // status값은 BoardStatus.PUBLIC으로 초기화한다
    };
    this.boards.push(board); // boards 배열에 지금 board를 push 한다
    return board; // 현재 전달인자(title, description)값으로 만들어진 board를 생성한다
  }
}
