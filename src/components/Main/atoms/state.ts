import { atom } from 'recoil';

const ShowModalAtom = atom<boolean>({
  key: 'showModal',
  default: false,
});

export { ShowModalAtom };
