import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // private를 사용하여 외부에서 접근 금지, Board[] 형식으로 데이터 타입 선언

  getAllBoards(): Board[] {
    // Board[] 형식으로 리턴값의 데이터 형식 선언
    return this.boards; // 모든 boards를 가져오는 Service
  }
}
