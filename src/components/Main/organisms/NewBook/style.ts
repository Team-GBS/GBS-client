import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  gap: 30px;
  position: relative;
`;

export const TitleText = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  gap: 60px;
  overflow: hidden;
`;

export const BookInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const BookInfo = styled.div`
  width: 255px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  z-index: 1;

`;

export const BookTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const BookAuthor = styled.div`
  font-size: 1rem;
`;

export const BookCount = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const BookExplain = styled.p`
  margin-top: 25px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const EBookList = styled.div`
  display: flex;
  gap: 60px;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: -50px;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  ${(props: { state: boolean }) =>
    props.state ? 'left: -50px' : 'right: -50px'}
`;
