import styled from '@emotion/styled';
import { BookItemProps } from 'types/Book';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const CoverWrapper = styled.div<BookItemProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props: { bookType: string }) => props.bookType};
  transform: translateX(${(props) => props.translateX});
  transition-duration: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.06);
  svg {
    width: 100px;
    height: 93px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  z-index: 5;
`;
