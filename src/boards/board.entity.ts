import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.model';

/* Entity는 Sequelize Model과 유사하다, 테이블 구조 정의 */
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
}
