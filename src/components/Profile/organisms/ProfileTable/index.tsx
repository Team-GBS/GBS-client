import * as S from './style';
import { DefaultProfileIcon, MenuIcon, NewTabLIcon } from 'assets/svg';
import Link from 'next/link';

const ProfileTable = () => {
  return (
    <S.TableWrapper>
      <S.ProfileContent>
        <S.LeftWrapper>
          <S.ProfileImg>
            <DefaultProfileIcon />
          </S.ProfileImg>
          <S.StuInfo>
            <p className="Name">
              손정민 <MenuIcon />
            </p>
            <p className="StuNum">3학년 1반 12번</p>
            <p className="BookNum">도서 대출 수 : 32권</p>
          </S.StuInfo>
        </S.LeftWrapper>
        <S.BookMarathon>
          <p>내 랭킹 : 1등</p>
          <Link href={'https://bookmarathon.gen.go.kr/main/main.php'}>
            <a target="_blank">
              독서마라톤
              <NewTabLIcon />
            </a>
          </Link>
        </S.BookMarathon>
      </S.ProfileContent>
      <S.MenuWrapper>
        <S.ListBtn>도서 대여 목록</S.ListBtn>
      </S.MenuWrapper>
      {true ? (
        <S.ListWrapper>borrowList</S.ListWrapper>
      ) : (
        <S.ListWrapper>bookmarkList</S.ListWrapper>
      )}
    </S.TableWrapper>
  );
};

export default ProfileTable;
