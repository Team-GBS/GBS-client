import { LoginIcon, Logo } from 'assets/svg';
import * as S from './style';
import GauthIcon from 'assets/svg/GauthIcon';
import { useRouter } from 'next/router';
import { gauthLoginUri } from 'Utils/Libs/GauthLoginUrI';

const LoginPage = () => {
  const router = useRouter();
  const LoginClick = () => {
    router.push(gauthLoginUri);
    const gauthCode = router.query.code?.toString();
  }

  return (
    <>
      <S.Container>
        <S.IconWrap>
          <LoginIcon />
          <S.IconLogo>GBS</S.IconLogo>
        </S.IconWrap>
        <S.GAuthLogin onClick={LoginClick}><GauthIcon color='#2E80CC' />Sign in with GAuth</S.GAuthLogin>
      </S.Container>
    </>
  );
};

export default LoginPage;
