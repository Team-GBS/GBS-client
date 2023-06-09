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
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <S.Wrap>
        <S.Line />
        <S.Logo onClick={() => {router.push('/')}}>
          <Logo />
          <S.GBSLogo>GBS</S.GBSLogo>
        </S.Logo>
        <S.Container>
          <SearchIcon />
          <AlermIcon />
          <ProfileIcon onClick={() => {router.push('/profile')}} />
          <ApplyIcon onClick={() => {router.push('/application')}} />
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
