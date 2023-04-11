import {
  AlermIcon,
  ApplyIcon,
  DarkMode,
  Logo,
  LightMode,
  ProfileIcon,
  SearchIcon,
} from 'assets/svg';
import * as S from './style';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <S.Wrap>
        <S.Line />
        <Logo />
        <S.Container>
          <S.Logo>
            <S.GBSLogo>GBS</S.GBSLogo>
          </S.Logo>
          <S.Navbar>
            <SearchIcon />
            <AlermIcon />
            <ProfileIcon />
            <ApplyIcon />
          </S.Navbar>
        </S.Container>
        <S.ModeSwitch
          onClick={() => {
            setToggle(!toggle);
          }}
          left={toggle}
          background={toggle}
        >
          <span>{toggle ? <DarkMode /> : <LightMode />}</span>
        </S.ModeSwitch>
      </S.Wrap>
    </>
  );
};

export default Header;
