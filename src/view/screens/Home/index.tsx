import React from 'react'
import { HeaderHomeComponent } from './component/HeaderHomeComponent'
import { NewBookHomeComponent } from './component'
import BestSellerComponent from './component/BestSellerComponent'
import * as Icon from 'react-icons/fa'
import ListPostComponent from './component/ListPostComponent'

const HomeView: React.FC = () => {
  return (
    <article className='flex flex-col'>
      <HeaderHomeComponent />
      <NewBookHomeComponent />
      <BestSellerComponent />
      <div className='w-full  bg-[#4848A4] flex flex-col justify-center items-center space-y-8 py-8'>
        <p className='text-4xl font-medium text-white'>BANU STORE - TIỆM SÁCH CỦA BẠN</p>
        <div className='flex flex-row space-x-36'>
          <div className='flex flex-col items-center space-y-4 w-52'>
            <Icon.FaTruckMonster size={120} color={'white'} />
            <p className='text-2xl text-center text-white'>Vân chuyển nhanh chóng</p>
          </div>
          <div className='flex flex-col items-center space-y-4 w-52'>
            <Icon.FaPager size={120} color={'white'} />
            <p className='text-2xl text-center text-white'>Khuyến mãi hấp dẫn</p>
          </div>
          <div className='flex flex-col items-center space-y-4 w-52'>
            <Icon.FaBookOpen size={120} color={'white'} />
            <p className='text-2xl text-center text-white'>Sách truyện phong phú</p>
          </div>
        </div>
      </div>
      <ListPostComponent />
      <div className='w-screen h-[27rem] flex flex-col justify-center items-center space-y-4 bg-[#4848A4] text-white'>
        <p className='mt-8 text-6xl font-medium'>HÃY ĐẾN CỬA HÀNG CỦA CHÚNG TÔI</p>
        <p className='text-2xl font-medium'>Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh</p>
        <div className='flex items-center justify-center py-4'>
          <button className='w-[15.75rem] py-2 border-[2px] border-solid border-white rounded-3xl text-white font-medium'>
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </article>
  )
}
export default HomeView
