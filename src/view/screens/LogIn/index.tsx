import React from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeLowVision } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { logInFormState, logInState } from './store/atom'
import { useLogIn } from './store/hook'
import { FadeLoader } from 'react-spinners'
const LogInView: React.FC = () => {
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false)
  const [logInForm, setLogInForm] = useRecoilState(logInFormState)
  const logIn = useRecoilValue(logInState)
  const { onLogIn } = useLogIn()
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <form action='' className='w-[46.875rem]  shadow-2xl py-20 px-24'>
        <div className='flex flex-col space-y-8'>
          <div className='text-5xl font-light'>ĐĂNG NHẬP</div>

          <div className='flex flex-col space-y-8'>
            <input
              type='text'
              value={logInForm.email}
              placeholder='Tên đăng nhập hoặc email'
              onChange={(event) => {
                setLogInForm((preState) => ({ ...preState, email: event.target.value }))
              }}
              className={`${
                logIn.state === 'hasError' && 'border-[#D50000]'
              } py-4 px-8 text-xl rounded-lg border-[1px] rounded-solid h-20`}
            />
            <div
              className={`${
                logIn.state === 'hasError' && 'border-[#D50000]'
              } py-4 px-8 text-xl h-20 rounded-lg border-[1px] rounded-solid flex flex-row justify-between items-center`}
            >
              <input
                type={`${isShowPassword ? 'text' : 'password'}`}
                value={logInForm.password}
                className='grow'
                placeholder='Mật khẩu'
                onChange={(event) => setLogInForm((preState) => ({ ...preState, password: event.target.value }))}
              />
              {isShowPassword ? (
                <div onClick={() => setIsShowPassword(false)}>
                  <FaEye />
                </div>
              ) : (
                <div onClick={() => setIsShowPassword(true)}>
                  <FaEyeLowVision />
                </div>
              )}
            </div>
          </div>
          {logIn.state === 'hasError' && <div className='text-[#D50000] text-xl pl-8'>{logIn.message}</div>}

          <div className='text-[#7775C5] text-2xl font-bold'>Quên mật khẩu?</div>

          <div className='flex justify-center w-full h-20'>
            <button
              onClick={(event) => {
                event.preventDefault()
                onLogIn()
              }}
              className='p-4 bg-[#003499] text-white w-[17.75rem] text-2xl font-bold rounded-full h-full flex justify-center items-center'
            >
              {logIn.state === 'loading' && <FadeLoader color='white' />}
              {(logIn.state === 'idle' || logIn.state === 'hasError') && 'Đăng nhập'}
            </button>
          </div>
          <div className='flex flex-row justify-center text-2xl'>
            Chưa có tài khoản? &nbsp;{' '}
            <p onClick={() => navigate('/signup')} className='text-[#000080] font-bold hover:cursor-pointer'>
              Đăng ký ngay
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
export default LogInView
