import { useNavigate } from 'react-router-dom'
import UserDetailHeaderComponent from '../userDropDownComponent'
import { useRecoilValue } from 'recoil'
import { logInState } from '@/view/screens/LogIn/store/atom'

export const LeftNavHeaderLayoutComponent = () => {
  const navigate = useNavigate()
  return (
    <section className='flex flex-row text-white h-16 justify-center items-center px-1.5'>
      <div
        onClick={() => navigate('/home')}
        className='w-44 hover:cursor-pointer h-full px-4 text-xl font-medium text-center  hover:bg-[#2F2F86]/60 flex items-center justify-center'
      >
        <p>Trang chủ</p>
      </div>
      <div
        onClick={() => navigate('/about')}
        className='w-44 px-4 h-full text-xl hover:cursor-pointer font-medium text-center  hover:bg-[#2F2F86]/60 flex items-center justify-center'
      >
        Về chúng tôi
      </div>
      <div className='w-44 px-4 h-full text-xl font-medium text-center hover:cursor-pointer  hover:bg-[#2F2F86]/60 flex items-center justify-center'>
        Liên hệ
      </div>
    </section>
  )
}
export const RightNavHeaderLayoutComponent = () => {
  const navigate = useNavigate()
  const logIn = useRecoilValue(logInState)
  return (
    <section className='flex flex-row text-white py-2.5 justify-center items-center px-1.5'>
      {logIn.state === 'hasValue' && <UserDetailHeaderComponent />}
      {logIn.state !== 'hasValue' && (
        <>
          <div onClick={() => navigate('/login')} className='w-32 text-xl font-medium text-center'>
            Đăng nhập
          </div>
          <div onClick={() => navigate('/signup')} className='w-32 text-xl font-medium text-center'>
            Đăng ký
          </div>
        </>
      )}
    </section>
  )
}
export const NavHeaderLayoutComponent = () => {
  return (
    <nav className='w-full bg-[#4848A4] h-16 flex flex-row justify-between'>
      <LeftNavHeaderLayoutComponent />
      <RightNavHeaderLayoutComponent />
    </nav>
  )
}
