import BookBox from 'components/Main/atoms/BookBox';
import * as S from './style';
import { useState } from 'react';

const BookList = () => {
  const [booklists, setBooklists] = useState([0, 1, 2, 3, 4, 5]);
  const [color, setColor] = useState({
    red: '#FFF5F5',
    yellow: '#FEFFF5',
    skyblue: '#F5FBFF',
    pink: '#FFF5FF',
  });

  return (
    <>
      <S.Wrap>
        <S.TitleText>도서 목록</S.TitleText>
        <S.Container>
          {booklists.map((booklist, i) => {
            return (
              <S.BookWrap key={i}>
                <BookBox
                  backgroundColor={color.pink}
                  height="16.9rem"
                />
                <S.BookName>세상의 모든 과학</S.BookName>
              </S.BookWrap>
            );
          })}
        </S.Container>
      </S.Wrap>
    </>
  );
};

export default BookList;
