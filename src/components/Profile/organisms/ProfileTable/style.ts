import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LeftWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 160px;
`;
export const ProfileImg = styled.div``;

export const StuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .Name {
    font-size: 32px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-bottom: -50px;
    svg {
      cursor: pointer;
    }
  }
  .StuNum {
    font-size: 20px;
    font-weight: 500;
    color: #595959;
  }
  .BookNum {
    font-size: 24px;
    font-weight: 500;
  }
`;
export const BookMarathon = styled.div`
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  a {
    text-decoration: none;
    color: #111;
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;

export const MenuWrapper = styled.div`
  border-top: 2px solid #eaeaea;
`;

export const ListBtn = styled.div`
  cursor: pointer;
`;

export const ListWrapper = styled.div``;
