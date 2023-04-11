import { AlermIcon, ApplyIcon, DarkMode, Logo, LightMode, ProfileIcon, SearchIcon } from 'assets/svg';
import * as S from './style';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <S.Wrap>
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
          left={toggle === false ? '4px' : '36px'}
          background={toggle === false ? '#e2e2e2' : '#656B80'}
        >
          <span>
            {toggle ? <DarkMode /> : <LightMode />}
          </span>
        </S.ModeSwitch>
      </S.Wrap>
    </>
  );
};

export default Header;
