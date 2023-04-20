import { RightARrowIcon } from 'assets/svg';
import * as S from './style';
import LeftArrowIcon from 'assets/svg/LeftArrowIcon';
import { useState } from 'react';
import BookListItem from 'components/Common/atoms/BookListItem';

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
          <S.BookInfoWrapper>
            <BookListItem
              title={'세상의 모든 과학'}
              bookType={'900'}
              state={'new'}
            />
            <S.BookInfo>
              <S.BookTitle>[과학] 세상의 모든 과학</S.BookTitle>
              <S.BookAuthor>Chun-ho-Yi</S.BookAuthor>
              <S.BookCount>2권</S.BookCount>
              <S.BookExplain>
                150여 그림으로 펼쳐낸 가장 우아한 '빅 히스토리' 인기 팟캐스트
                과빛밤 지기의 친절한 빅 히스토리 과학 여행서
              </S.BookExplain>
            </S.BookInfo>
          </S.BookInfoWrapper>
          <S.EBookList>
            <BookListItem
              title={'세상의 모든 과학'}
              bookType={'500'}
              state={'new'}
            />
            <BookListItem
              title={'세상의 모든 과학'}
              bookType={'500'}
              state={'new'}
            />
            <BookListItem
              title={'세상의 모든 과학'}
              bookType={'500'}
              state={'new'}
            />
            <BookListItem
              title={'세상의 모든 과학'}
              bookType={'500'}
              state={'new'}
            />
          </S.EBookList>
        </S.Container>
        <S.Arrow state={true}>
          <LeftArrowIcon />
        </S.Arrow>
        <S.Arrow state={false}>
          <RightARrowIcon />
        </S.Arrow>
      </S.Wrap>
    </>
  );
};

export default NewBook;
