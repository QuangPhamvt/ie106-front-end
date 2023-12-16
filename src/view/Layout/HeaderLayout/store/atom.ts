import { atom } from 'recoil'
export const dropDownUserDetailHeaderAtom = atom<{ open: boolean }>({
  key: 'dropDownUserDetailHeaderAtom',
  default: {
    open: false,
  },
})
