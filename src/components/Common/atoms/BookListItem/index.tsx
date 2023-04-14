import { useState } from 'react';
import * as S from './style';
import { BookItemProps } from 'types/Book';
import { getBookColor } from 'Utils/Libs/getBookColor';
import { NoneBookIcon } from 'assets/svg';

const BookListItem = ({ title, bookType, cover }: BookItemProps) => {
  return (
    <S.ItemWrapper>
      <S.CoverWrapper bookType={getBookColor[bookType]}>
        {cover ? <></> : <NoneBookIcon />}
      </S.CoverWrapper>
      <S.Title>{title}</S.Title>
    </S.ItemWrapper>
  );
};

export default BookListItem;
