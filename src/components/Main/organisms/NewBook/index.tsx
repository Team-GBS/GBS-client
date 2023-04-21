import { BookIcon, Logo, RightARrowIcon } from 'assets/svg';
import * as S from './style';
import LeftArrowIcon from 'assets/svg/LeftArrowIcon';
import BookListItem from 'components/Common/atoms/BookListItem';
import { useEffect, useRef, useState } from 'react';

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
          <BookListItem
            translateX={`-${position * 315}px`}
            bookType="700"
            height="330px"
            width="255px"
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
          {newbooks.map((newbook, idx) => (
            <BookListItem
              key={newbook}
              translateX={
                position >= idx + 1
                  ? `-${position * 315 + 315}px`
                  : `-${position * 315}px`
              }
              bookType={String(newbook)}
              height="330px"
              width="255px"
            />
          ))}
        </S.Container>
        <S.LeftArrow
          onClick={() => {
            setPosition(position - 1);
          }}
          visibility={position === 0 ? 'hidden' : 'visible'}
        >
          <LeftArrowIcon />
        </S.LeftArrow>
        <S.RightArrow
          onClick={() => {
            setPosition(position + 1);
          }}
          visibility={position === newbooks.length - 2 ? 'hidden' : 'visible'}
        >
          <RightARrowIcon />
        </S.RightArrow>
      </S.Wrap>
    </>
  );
};

export default NewBook;
