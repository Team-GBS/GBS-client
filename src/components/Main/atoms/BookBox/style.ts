import styled from '@emotion/styled';

export const BookBox = styled.div<{
  backgroundColor: string;
  height: string;
  width: string;
  pointerEvents: string;
}>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => props.pointerEvents};
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  svg {
    width: 100px;
    height: 100px;
  }
`;
