import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

/* Board Entity를 컨트롤하는 Repository를 선언 */
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  /* createBoard 메서드 중 DB 관련 동작은 Repository에서 수행한다 */
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    /* title과 description은 구조분해 할당으로 createBoardDto에서 꺼내어서 사용해준다 */
    const { title, description } = createBoardDto;
    const board = this.create({
      title, // title: title,
      description, // description: description,
      status: BoardStatus.PUBLIC, // status값은 BoardStatus.PUBLIC으로 초기화한다
    });
    await this.save(board); // board를 데이터베이스에 저장
    return board; // DB에 저장한 board를 반환한다
  }
}
