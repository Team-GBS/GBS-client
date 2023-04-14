export interface ModalStyleProps {
  isClick: boolean;
}

export interface ProfileModalProps extends ModalStyleProps {
  setState: (state: boolean) => void;
}
