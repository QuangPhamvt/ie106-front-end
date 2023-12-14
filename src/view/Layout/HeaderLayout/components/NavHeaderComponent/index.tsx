export const LeftNavHeaderLayoutComponent = () => {
  return (
    <section className='flex flex-row space-x-[20px] text-white h-16 py-1.5 justify-center items-center px-1.5'>
      <div className='w-32 text-sm font-bold text-center '>Trang chủ</div>
      <div className='w-32 text-sm font-bold text-center'>Về chúng tôi</div>
      <div className='w-32 text-sm font-bold text-center'>Liên hệ</div>
    </section>
  )
}
export const RightNavHeaderLayoutComponent = () => {
  return (
    <section className='flex flex-row text-white py-2.5 justify-center items-center px-1.5'>
      <div className='w-32 text-sm font-bold text-center'>Đăng ký</div>
      <div className='w-32 text-sm font-bold text-center'>Đăng nhập</div>
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
