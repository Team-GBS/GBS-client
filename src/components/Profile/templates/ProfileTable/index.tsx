import * as S from './style';
import Link from 'next/link';
import { useState } from 'react';
import { DefaultProfileIcon, MenuIcon, NewTabLIcon } from 'assets/svg';
import BookList from 'components/Common/molecules/BookList';
import ProfileModal from 'components/Profile/molecules/ProfileModal';

const ProfileTable = () => {
  const [menuState, setMenuState] = useState(0);
  const menuList = ['도서 대여 목록', '북마크'];
  const [modalState, setModalState] = useState(false);
  const marathonLink = 'https://bookmarathon.gen.go.kr/main/main.php';

  return (
    <S.TableWrapper>
      <S.ProfileContent>
        <S.ProfileImg>
          <DefaultProfileIcon />
        </S.ProfileImg>
        <S.InfoWrapper>
          <S.StuInfo>
            <S.Name className="Name">
              손정민 <MenuIcon onClick={() => setModalState(!modalState)} />
              {modalState && (
                <ProfileModal isClick={modalState} setState={setModalState} />
              )}
            </S.Name>
            <S.StuNum className="StuNum">3학년 1반 12번</S.StuNum>
            <S.BookNum className="BookNum">도서 대출 수 : 32권</S.BookNum>
          </S.StuInfo>
          <S.BookMarathon>
            <p>내 랭킹 : 1등</p>
            <Link href={marathonLink}>
              <a target="_blank">
                독서마라톤
                <NewTabLIcon />
              </a>
            </Link>
          </S.BookMarathon>
        </S.InfoWrapper>
      </S.ProfileContent>
      <S.MenuWrapper>
        {menuList.map((i, idx) => (
          <S.ListBtn
            state={!(menuState === idx)}
            onClick={() => setMenuState(idx)}
          >
            {i}
          </S.ListBtn>
        ))}
      </S.MenuWrapper>
      <BookList />
    </S.TableWrapper>
  );
};

export default ProfileTable;
