import { TState } from '@/view/utilities'
import { atom } from 'recoil'

type TLogInFormState = {
  email: string
  password: string
}
type TLogInState = {
  state: TState
  message: string | null
}
export const logInFormState = atom<TLogInFormState>({
  key: 'logInFormStateAtom',
  default: {
    email: '',
    password: '',
  },
})
export const logInState = atom<TLogInState>({
  key: 'logInStateAtom',
  default: {
    state: 'idle',
    message: null,
  },
})
