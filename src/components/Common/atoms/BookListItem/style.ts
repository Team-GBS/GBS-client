import styled from '@emotion/styled';
import { BookItemStyleProps } from 'types/Book';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const CoverWrapper = styled.div`
  width: ${(props: BookItemStyleProps) =>
    props.state === 'new'
      ? '232px'
      : props.state === 'detail'
      ? '345px'
      : '190px'};
  height: ${(props: BookItemStyleProps) =>
    props.state === 'new'
      ? '330px'
      : props.state === 'detail'
      ? '465px'
      : '270px'};
  background-color: ${(props: BookItemStyleProps) => props.bookType};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  svg {
    width: 100px;
    height: 93px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
`;
