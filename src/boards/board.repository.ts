import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

/* Board Entity를 컨트롤하는 Repository를 선언 */
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    /* title과 description은 구조분해 할당으로 createBoardDto에서 꺼내어서 사용해준다 */
    const { title, description } = createBoardDto;
    /* 만들어질 board는 Board 모델을 타입을 따른다 */
    const board = this.create({
      title, // title: title,
      description, // description: description,
      status: BoardStatus.PUBLIC, // status값은 BoardStatus.PUBLIC으로 초기화한다
    });
    await this.save(board); // boardRepository에 지금 board를 데이터베이스에 save한다
    return board; // 전달인자(title, description)값으로 만들어진 board를 생성한다
  }
}
