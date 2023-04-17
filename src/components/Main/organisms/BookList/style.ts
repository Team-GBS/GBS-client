import styled from '@emotion/styled';

export const Wrap = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TitleText = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 40px;
    grid-column-gap: 64px;
`;

export const BookWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const BookName = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
`;
