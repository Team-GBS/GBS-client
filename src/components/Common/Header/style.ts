import styled from '@emotion/styled';

export const Wrap = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  justify-content: space-between;
`;

export const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: calc((1200px - 100vw) / 2);
  width: 100vw;
  height: 2px;
  background-color: #eaeaea;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const GBSLogo = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const ModeSwitch = styled.label<{ left: boolean; background: boolean }>`
  width: 100px;
  height: 50px;
  display: block;
  position: relative;
  border-radius: 50px;
  background-color: ${(props) => (!props.background ? '#e2e2e2' : '#656B80')};
  cursor: pointer;
  span {
    width: 42px;
    height: 42px;
    position: absolute;
    top: 50%;
    left: ${(props) => (!props.left ? '4px' : 'calc(100% - 46px)')};
    transform: translateY(-50%);
    border-radius: 50%;
    background: #fff;
    transition: all 0.13s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
