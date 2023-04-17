import styled from '@emotion/styled';

export const Wrap = styled.div<{display: string}>`
  background-color: rgba(217, 217, 217, 0.7);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Modal = styled.div`
    background-color: #fff;
    display: flex;
    position: relative;
    width: 52rem;
    height: 34rem;
    z-index: 100;
    padding: 40px;
    gap: 70px;
    overflow: hidden;
`;

export const BookInfo = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 20px;
`;

export const BookExplain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const BookTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const BookMaker = styled.div`
  font-weight: 1rem;
  font-weight: bold;
`;

export const BookSummary = styled.div`
  margin-top: 20px;
  font-size: 1rem;
`;

export const BookBorrowWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 20px;
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

export const BookRemain = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const BookRent = styled.div`
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #77B66F;
  width: 8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #77B66F;
  :hover {
    background-color: #77B66F;
    color: white;
    transition-duration: 0.3s;
  }
`;

export const NoBookRent = styled(BookRent)`
  border: 2px solid #D84D4D;
  background-color: #D84D4D;
  color: white;
  :hover {
    background-color: #D84D4D;
  }
`;

export const PrevBook = styled.div`
  height: 40px;
  width: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  top: 45%;
  left: 100px;
`;

export const NextBook = styled.div`
  height: 40px;
  width: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  top: 45%;
  right: 100px;
`;

export const BookMark = styled.div<{top: string}>`
  position: absolute;
  right: 25px;
  top: ${(props) => props.top};
  transition-duration: 0.3s;
`;







