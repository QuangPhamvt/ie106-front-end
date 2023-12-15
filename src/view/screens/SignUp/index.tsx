import React from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeLowVision } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
const SignUpView: React.FC = () => {
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false)
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <form action='' className='w-[46.875rem]  shadow-2xl py-16 px-24'>
        <div className='flex flex-col space-y-8'>
          <div className='text-5xl font-light'>ĐĂNG KÝ</div>

          <div className='flex flex-col space-y-6'>
            <input
              type='text'
              placeholder='Tên đăng nhập'
              className='py-4 px-8 text-xl rounded-lg border-[1px] rounded-solid h-20'
            />
            <input
              type='text'
              placeholder='Email'
              className='py-4 px-8 text-xl rounded-lg border-[1px] rounded-solid h-20'
            />
            <div className='py-4 px-8 text-xl h-20 rounded-lg border-[1px] rounded-solid flex flex-row justify-between items-center'>
              <input type={`${isShowPassword ? 'text' : 'password'}`} className='grow' placeholder='Mật khẩu' />
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
            <input
              type='password'
              placeholder='Nhập lại mật khẩu'
              className='py-4 px-8 text-xl h-20 rounded-lg border-[1px] rounded-solid'
            />
          </div>

          <div className='text-[#7775C5] text-2xl font-bold'>Quên mật khẩu?</div>

          <div className='flex justify-center w-full h-20'>
            <button className='p-4 bg-[#003499] text-white w-[17.75rem] text-2xl font-bold rounded-full h-full'>
              Đăng ký
            </button>
          </div>
          <div className='flex flex-row justify-center text-2xl'>
            Đã có tài khoản? &nbsp;{' '}
            <p onClick={() => navigate('/login')} className='text-[#000080] font-bold'>
              Đăng nhập ngay
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
export default SignUpView
