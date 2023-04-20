import { atom } from 'recoil';

export const ShowModalAtom = atom<boolean>({
  key: 'showModal',
  default: false,
});
