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
        <S.Logo>
          <Logo />
          <S.GBSLogo>GBS</S.GBSLogo>
        </S.Logo>
        <S.Container>
          <SearchIcon />
          <AlermIcon />
          <ProfileIcon />
          <ApplyIcon />
          <S.ModeSwitch
          onClick={() => {
            setToggle(!toggle);
          }}
          left={toggle}
          background={toggle}
        >
          <span>{toggle ? <DarkMode /> : <LightMode />}</span>
        </S.ModeSwitch>
        </S.Container>
      </S.Wrap>
    </>
  );
};

export default Header;
