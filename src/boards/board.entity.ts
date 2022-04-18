import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enum';

/* Entity는 Sequelize Model과 유사하다, 테이블의 구조를 정의한다 */
@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn() // PK
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @Column()
  name: string;
}
