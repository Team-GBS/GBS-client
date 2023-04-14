import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 28px;
  padding-top: 25px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

export const Input = styled.input`
  width: 600px;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-family: GmarketSans;
  font-weight: 500;
  font-size: 18px;
  ::placeholder {
    color: #d3d3d3;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ImgBox = styled.div`
  width: 350px;
  height: 200px;
  background-color: gray;
  border-radius: 8px;
  cursor: pointer;
`;

export const ApplicationBtn = styled.div`
  width: 165px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #656b80;
  font-weight: 500;
  font-size: 26px;
  border: 2px solid #656b80;
  border-radius: 8px;
  :hover {
    color: white;
    background-color: #656b80;
  }
  cursor: pointer;
`;
