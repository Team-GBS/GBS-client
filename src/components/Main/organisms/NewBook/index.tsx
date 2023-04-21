import { RightARrowIcon } from 'assets/svg';
import * as S from './style';
import LeftArrowIcon from 'assets/svg/LeftArrowIcon';
import { useEffect, useState } from 'react';
import BookListItem from 'components/Common/atoms/BookListItem';

const NewBook = () => {
  const [position, setPosition] = useState(0);
  const newbooks = [100, 200, 300, 400, 500];

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <>
      <S.Wrap>
        <S.TitleText>신간 도서</S.TitleText>
        <S.Container>
          <S.BookInfoWrapper>
            <BookListItem
              translateX={`-${position * 315}px`}
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
            {newbooks.map((newbook, idx) => (
              <BookListItem
                key={newbook}
                translateX={
                  position >= idx + 1
                    ? `-${position * 315 + 315}px`
                    : `-${position * 315}px`
                }
                bookType={String(newbook)}
                state={'new'}
              />
            ))}
          </S.EBookList>
        </S.Container>
        <S.Arrow
          state={true}
          onClick={() => {
            setPosition(position - 1);
          }}
        >
          <LeftArrowIcon />
        </S.Arrow>
        <S.Arrow
          state={false}
          onClick={() => {
            setPosition(position + 1);
          }}
        >
          <RightARrowIcon />
        </S.Arrow>
      </S.Wrap>
    </>
  );
};

export default NewBook;
