import React from 'react'
import Logo from '@/assets/logo-hor.svg?react'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const FooterLayout: React.FC = () => {
  return (
    <div className='w-screen flex flex-row space-x-2.5 py-16 border-t-[0.5px] border-solid border-zinc-600  mt-12'>
      <div className='flex flex-col w-1/3 px-6 space-y-4 text-2xl font-[400]'>
        <Logo className='h-32' />
        <div>Hotline: 022XXXX</div>
        <div>Địa chỉ: Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh</div>
        <div>Email: online@gmail.com</div>
      </div>

      <div className='flex flex-row w-1/3 px-2 text-2xl font-[400] space-x-8'>
        <div className='flex flex-col space-y-4 text-2xl grow'>
          <div className='font-bold'>HỖ TRỢ KHÁCH HÀNG</div>
          <div className='font-[350]'>Câu hỏi thường gặp </div>
          <div className='font-[350]'>Điều khoản dịch vụ</div>
        </div>
        <div className='flex flex-col space-y-4 text-2xl'>
          <div className='font-bold'>CHÍNH SÁCH</div>
          <div className='font-[350]'>Chính sách bảo mật</div>
          <div className='font-[350]'>Chính sách thanh toán</div>
          <div className='font-[350]'>Chính sách vận chuyển</div>
          <div className='font-[350]'>Chính sách đổi trả</div>
        </div>
      </div>

      <div className='flex flex-row w-1/3 pl-28 text-2xl font-[400] space-x-8'>
        <div className='flex flex-col space-y-8 text-2xl grow'>
          <div className='font-bold'>KẾT NỐI VỚI CHÚNG TÔI</div>

          <div className='font-[350] flex pl-8 items-center space-x-2'>
            <FiFacebook size={'32px'} />
            <a href='https://www.facebook.com/customafk' target='_blank'>
              Facebook
            </a>
          </div>

          <div className='font-[350] flex pl-8 items-center space-x-2'>
            <FiInstagram size={'32px'} />
            <a href='https://www.Instagram.com' target='_blank'>
              Instagram
            </a>
          </div>

          <div className='font-[350] flex pl-8 items-center space-x-2'>
            <FiTwitter size={'32px'} />
            <a href='https://twitter.com/' target='_blank'>
              Twitter
            </a>
          </div>

          <div className='font-[350] flex pl-8 items-center space-x-2'>
            <FiYoutube size={'32px'} />
            <a href='https://www.youtube.com/channel/UCmsM9BU8R7Wh5uVE242CKmw' target='_blank'>
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLayout
