import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 350px;
  gap: 75px;
  border-radius: 15px;
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const IconLogo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const GAuthLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 17rem;
  max-height: 5rem;
  white-space: nowrap;
  background: white;
  color: #2E80CC;
  border: 2px solid #2E80CC;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.7rem 0;
  font-weight: 600;
  outline: none;
`;
