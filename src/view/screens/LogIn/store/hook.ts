/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { logInFormState, logInState } from './atom'
import { userFake } from '@/mockData/user'
import { timeout, validateEmail } from '@/view/utilities'
import { useNavigate } from 'react-router-dom'

export const useLogIn = () => {
  const logInForm = useRecoilValue(logInFormState)
  const setLogIn = useSetRecoilState(logInState)
  const reset = useResetRecoilState(logInFormState)
  const navigate = useNavigate()
  const onLogIn = async () => {
    try {
      setLogIn({ state: 'loading', message: null })
      await timeout(2000)
      if (logInForm.email === userFake.email && logInForm.password === userFake.password) {
        setLogIn({ state: 'hasValue', message: 'Successfully' })
        navigate('/home')
      } else if (!validateEmail(logInForm.email)) throw { message: 'Email is not validate' }
      else if (!logInForm.email || !logInForm.password) throw { message: 'Email or password is empty' }
      else throw { message: 'Email is not exist or password is wrong' }
      reset()
    } catch (error: any) {
      setLogIn({ state: 'hasError', message: error.message })
      reset()
    }
  }
  return { onLogIn }
}
