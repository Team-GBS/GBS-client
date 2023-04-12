import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  width: 53rem;
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StuInfo = styled.div`
  height: 100%;
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
    position: relative;
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
  display: flex;
  gap: 70px;
  margin: 70px 0;
`;

export const ListBtn = styled.div`
  margin-top: 15px;
  font-size: 28px;
  font-weight: 700;
  color: ${(props: { state: boolean }) => (props.state ? '#737373' : '#111')};
  cursor: pointer;
`;
