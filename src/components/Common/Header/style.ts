import styled from "@emotion/styled";

export const Wrap = styled.div`
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    height: 75px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 200px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    display: flex;
`;

export const GBSLogo = styled.div`
    font-size: 25px;
    font-weight: 700;
`;

export const Navbar = styled.div`
    gap: 30px;
    display: flex;
`;

export const ModeSwitch = styled.label<{left: boolean, background: boolean}>`
    width: 85px;
    margin-left: 30px;
    height: 35px;
    display: block;
    position: relative;
    border-radius: 30px;
    background-color: ${(props) => props.background === false ? '#e2e2e2' : '#656B80'};
    cursor: pointer;
    span {
        width: 27px;
        height: 27px;
        position: absolute;
        top: 50%;
        left: ${(props) => props.left === false ? '4px' : 'calc(100% - 31px)'};
        transform: translateY(-50%);
        border-radius: 50%;
        background: #fff;
        transition: all 0.13s ease-in;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;