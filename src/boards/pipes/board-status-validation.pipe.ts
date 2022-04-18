import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

/* BoardStatusValidationPipe은 status가 'PUBLIC', 'PRIVATE'로만 설정될 수 있도록 하는 커스텀 파이프 생성 */
export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC]; // 읽기전용 StatusOptions 배열 선언

  transform(value: any) {
    /* ※ value는 인풋값 그 자체이며, metadata는 타입과 파라미터에 대한 정보를 담고 있다 (metadata는 사용하지 않았으므로 생략) */
    value = value.toUpperCase(); // 인풋값으로 받은 value를 대문자로 변환한다
    /* isStatusValid 유효성 검사를 value값을 넣어 통과하지 못한다면 유효하지 않은 value 값이므로 에러메시지를 던진다 */
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }
    return value; // 대문자로 변환 후 유효성 검사를 통과한 value라면 반환한다
  }
  /* 유효성 검사 */
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status); // 현재 입력받은 상태가 StatusOptions에 들어있다면 index를 반환받는다 (없다면 -1을 반환)
    return index !== -1;
  }
}
