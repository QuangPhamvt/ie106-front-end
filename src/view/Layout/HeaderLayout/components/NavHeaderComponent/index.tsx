import { useNavigate } from 'react-router-dom'

export const LeftNavHeaderLayoutComponent = () => {
  const navigate = useNavigate()
  return (
    <section className='flex flex-row space-x-[20px] text-white h-16 py-1.5 justify-center items-center px-1.5'>
      <div onClick={() => navigate('/home')} className='w-32 text-xl font-medium text-center '>
        Trang chủ
      </div>
      <div className='w-32 text-xl font-medium text-center'>Về chúng tôi</div>
      <div className='w-32 text-xl font-medium text-center'>Liên hệ</div>
    </section>
  )
}
export const RightNavHeaderLayoutComponent = () => {
  const navigate = useNavigate()
  return (
    <section className='flex flex-row text-white py-2.5 justify-center items-center px-1.5'>
      <div onClick={() => navigate('/login')} className='w-32 text-xl font-medium text-center'>
        Đăng ký
      </div>
      <div onClick={() => navigate('/signup')} className='w-32 text-xl font-medium text-center'>
        Đăng nhập
      </div>
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
