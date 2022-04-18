import { IsNotEmpty } from 'class-validator'; // class-validator 모듈에서 IsNotEmpty 사용

export class CreateBoardDto {
  @IsNotEmpty() // IsNotEmpty class-validator로 DTO 타입 체크 (Not Null)
  title: string;

  @IsNotEmpty()
  description: string;
}
