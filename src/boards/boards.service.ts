import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // /* 모든 board를 반환하는 getBoards 메서드 선언 */
  // getAllBoards(): Board[] {
  //   // Board[] 형식으로 리턴값의 데이터 형식 선언
  //   return this.boards; // 모든 boards를 가져온다
  // }
  /* 전달인자로 CreateBoardDTO를 갖는 보드를 생성하는 createBoard 메서드 선언 */
  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto); // Repository 패턴 적용
  }
  /* 전달인자로 id를 갖는 특정 ID 보드를 찾는 getBoardById 메서드 선언 */
  async getBoardById(id: number): Promise<Board> {
    // 전달인자로 받은 id와 일치하는 board 1개를 found 변수에 담는다
    const found = await this.boardRepository.findOne(id);
    // 만약 found가 없다면 NotFoundException 인스턴스를 호출한다 (404 에러))
    if (!found) throw new NotFoundException(`Can't find Board with ID: ${id}`);
    return found;
  }

  /* 전달인자로 id를 갖는 특정 ID 보드를 삭제하는 deleteBoard 메서드 선언 */
  async deleteBoard(id: number): Promise<void> {
    // remove 대신 delete를 사용한다 (remove는 비효율적)
    const result = await this.boardRepository.delete(id);
    /* 삭제할 ID가 없다면 에러메시지 반환 */
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id: ${id}`);
    }
  }

  /* 전달인자로 id와 status를 받아 특정 게시글 상태를 업데이트하는 updateBoardStatus 메서드 선언 */
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    // 특정 id를 가진 board를 찾는다
    const board = await this.getBoardById(id);
    // 특정 id를 가진 board의 상태값을 전달인자로 받은 status로 재할당해준뒤 DB에 저장한다
    board.status = status;
    await this.boardRepository.save(board);
    // 해당 board를 반환한다
    return board;
  }
}
