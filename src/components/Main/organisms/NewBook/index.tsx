import { BookIcon, Logo, RightARrowIcon } from 'assets/svg';
import * as S from './style';
import LeftArrowIcon from 'assets/svg/LeftArrowIcon';
import BookBox from 'components/Main/atoms/BookBox';
import { useState } from 'react';

const NewBook = () => {
  const [color, setColor] = useState({
    red: '#FFF5F5',
    yellow: '#FEFFF5',
    skyblue: '#F5FBFF',
  });

  return (
    <>
      <S.Wrap>
        <S.TitleText>신간 도서</S.TitleText>
        <S.Container>
          <BookBox backgroundColor={color.red} height='20.5rem' width='16.9rem' />
          <S.BookInfo>
            <S.BookTitle>[과학] 세상의 모든 과학</S.BookTitle>
            <S.BookAuthor>Chun-ho-Yi</S.BookAuthor>
            <S.BookCount>2권</S.BookCount>
            <S.BookExplain>
              150여 그림으로 펼쳐낸 가장 우아한 '빅 히스토리' 인기 팟캐스트
              과빛밤 지기의 친절한 빅 히스토리 과학 여행서
            </S.BookExplain>
          </S.BookInfo>
          <BookBox backgroundColor={color.yellow} height='20.5rem' width='16.9rem' />
          <BookBox backgroundColor={color.skyblue} height='20.5rem' width='16.9rem' />
        </S.Container>
        <S.LeftArrow>
          <LeftArrowIcon />
        </S.LeftArrow>
        <S.RightArrow>
          <RightARrowIcon />
        </S.RightArrow>
      </S.Wrap>
    </>
  );
};

export default NewBook;
