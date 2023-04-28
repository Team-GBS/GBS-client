import { atom } from 'recoil';

export const ShowModalAtom = atom<boolean>({
  key: 'showModal',
  default: false,
});

export const ThisBookColorAtom = atom<string>({
  key: 'thisBookColor',
  default: '',
});