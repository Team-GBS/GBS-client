import styled from '@emotion/styled';
import { ModalStyleProps } from 'types/Modal';

export const ProfileModalWrapper = styled.div`
  width: 100px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  position: absolute;
  right: -20px;
  top: -50px;
  z-index: 10;
`;

export const ModalMenu = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #f2f2f4;
  }
`;

export const ProfileOverlay = styled.div`
  visibility: ${(props: ModalStyleProps) =>
    props.isClick ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
`;
