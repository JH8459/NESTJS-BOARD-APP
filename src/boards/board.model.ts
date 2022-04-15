/* board Model 파일 */

export interface Board {
  // 모델을 정의하기 위한 interface (변수의 타입만을 체크한다)
  id: string;
  title: string;
  description: string;
  status: BoardStatus; // 게시물이 공개 게시물인지 비밀 게시물인지 선택하는 타입
}

export enum BoardStatus {
  // BoardStatus가 PUBLIC과 PRIVATE 두가지 상태만 나오기 위한 enumeration 설정
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
