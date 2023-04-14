import * as S from './style';

const ApplicationTable = () => {
  return (
    <S.TableWrapper>
      <S.Header>도서 신청</S.Header>
      <S.InputBox>
        <S.Title>책 이름</S.Title>
        <S.Input placeholder="예) 해리포터 불의 잔" />
      </S.InputBox>
      <S.InputBox>
        <S.Title>책 저자</S.Title>
        <S.Input placeholder="예) J.K 롤링" />
      </S.InputBox>
      <S.ImgWrapper>
        <S.Title>이미지 첨부</S.Title>
        <S.ImgBox />
      </S.ImgWrapper>
      <S.ApplicationBtn>신청하기</S.ApplicationBtn>
    </S.TableWrapper>
  );
};

export default ApplicationTable;
