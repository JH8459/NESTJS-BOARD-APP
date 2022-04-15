import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; // private를 사용하지 않는다면, 다른 컴포넌트에서도 해당 변수가 참조 가능해진다

  getAllBoards() {
    return this.boards; // 모든 boards를 가져오는 Service
  }
}
