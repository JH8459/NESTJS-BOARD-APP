import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  // private boards: Board[] = []; // private를 사용하여 외부에서 접근 금지, Board[] 형식으로 데이터 타입 선언
  // /* 모든 board를 반환하는 getBoards 메서드 선언 */
  // getAllBoards(): Board[] {
  //   // Board[] 형식으로 리턴값의 데이터 형식 선언
  //   return this.boards; // 모든 boards를 가져온다
  // }
  // /* 전달인자로 CreateBoardDTO를 갖는 보드를 생성하는 createBoard 메서드 선언 */
  // createBoard(createBoardDto: CreateBoardDto) {
  //   /* title과 description은 구조분해 할당으로 createBoardDto에서 꺼내어서 사용해준다 */
  //   const { title, description } = createBoardDto;
  //   /* 만들어질 board는 Board 모델을 타입을 따른다 */
  //   const board: Board = {
  //     id: uuid(), // uuid 모듈을 이용한 유니크한 ID값 선언
  //     title, // title: title,
  //     description, // description: description,
  //     status: BoardStatus.PUBLIC, // status값은 BoardStatus.PUBLIC으로 초기화한다
  //   };
  //   this.boards.push(board); // boards 배열에 지금 board를 push 한다
  //   return board; // 현재 전달인자(title, description)값으로 만들어진 board를 생성한다
  // }
  // /* 전달인자로 id를 갖는 특정 ID 보드를 찾는 getBoardById 메서드 선언 */
  // getBoardById(id: string): Board {
  //   // 전달인자로 받은 id와 일치하는 board 1개를 found 변수에 담는다
  //   const found = this.boards.find((board) => board.id === id);
  //   // 만약 found가 없다면 NotFoundException 인스턴스를 호출한다 (404 에러))
  //   if (!found) throw new NotFoundException(`Can't find Board with ID: ${id}`);
  //   return found;
  // }

  // /* 전달인자로 id를 갖는 특정 ID 보드를 삭제하는 deleteBoard 메서드 선언 (리턴값이 없으므로 void 타입 사용) */
  // deleteBoard(id: string): void {
  //   // getBoardById 메서드 재활용, 존재하지 않는 ID를 삭제하려는 경우 에러메시지를 리턴한다
  //   const found = this.getBoardById(id);
  //   // found.id와 일치하는 board 1개를 제외 후 boards 배열을 재할당 해준다
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }

  // /* 전달인자로 id와 status를 받아 특정 게시글 상태를 업데이트하는 updateBoardStatus 메서드 선언 */
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   // 특정 id를 가진 board를 찾는다
  //   const board = this.getBoardById(id);
  //   // 특정 id를 가진 board의 상태값을 전달인자로 받은 status로 재할당해준다
  //   board.status = status;
  //   // 해당 board를 반환한다
  //   return board;
  // }
}
