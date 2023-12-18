import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const NotAuthorization: React.FC = () => {
  const navigation = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center w-screen mt-10 space-y-8 text-2xl'>
      <div className='text-6xl'>Xin lỗi</div>
      <div>Bạn không có quyền truy cập trang này</div>
      <div className='flex'>
        Vui lòng &#160;<p className='text-[#4848A4]'> quay lại trang chủ</p>
      </div>
      <div
        onClick={() => navigation('/home')}
        className='border-[2px] border-solid border-[#4848A4] flex justify-between hover:cursor-pointer space-x-4 items-center py-2 px-8 rounded-xl  text-[#4848A4]'
      >
        <FaArrowLeftLong />
        <button>Quan lại trang chủ</button>
      </div>
      <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/403.png' height={544} width={1002} alt='' />
    </div>
  )
}

export default NotAuthorization
