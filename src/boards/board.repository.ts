import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

/* Board Entity를 컨트롤하는 Repository를 선언 */
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
