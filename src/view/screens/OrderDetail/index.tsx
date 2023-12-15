import React from 'react'

const OrderDetailView: React.FC = () => {
  return (
    <div className='container flex flex-col mx-auto mt-20 space-y-5'>
      <div className='text-[32px] font-bold'>TÌNH TRẠNG ĐƠN HÀNG</div>
      <div className='border-solid border-[1px] border-[#4848A4] px-6 py-12 rounded-lg flex flex-col space-y-5'>
        <div className='flex flex-row space-x-32 text-xl'>
          <div className='w-32 text-center'>Mã đơn hàng</div>
          <div className='w-32 text-center'>Ngày mua</div>
          <div className='w-32 text-center'>Người nhận</div>
          <div className='w-32 text-center'>Thành tiền</div>
          <div className='w-32 text-center'>Tình trạng</div>
        </div>
        <div className='w-full border-[0.5px] border-solid border-zinc-500' />

        <div className='flex flex-row items-center space-x-32 text-xl font-bold'>
          <div className='w-32 text-center'>00001234</div>
          <div className='w-32 text-center'>01/01/2024</div>
          <div className='w-32 text-center'>Nguyễn Văn A</div>
          <div className='w-32 text-center'>999.999</div>
          <div className='w-32 text-center text-[#4848a4]'>Đã giao</div>
          <button className='py-2 px-8 border-solid border-[1px] border-[#4848A4] font-semibold rounded-lg text-[#4848A4]'>
            Xem chi tiết
          </button>
        </div>
        <div className='w-full border-[0.5px] border-solid border-zinc-500' />

        <div className='flex flex-row items-center space-x-32 text-xl font-bold'>
          <div className='w-32 text-center'>00001234</div>
          <div className='w-32 text-center'>01/01/2024</div>
          <div className='w-32 text-center'>Nguyễn Văn A</div>
          <div className='w-32 text-center'>999.999</div>
          <div className='w-32 text-center text-[#FFA500]'>Đang giao</div>
          <button className='py-2 px-8 border-solid border-[1px] border-[#4848A4] font-semibold rounded-lg text-[#4848A4]'>
            Xem chi tiết
          </button>
        </div>
        <div className='w-full border-[0.5px] border-solid border-zinc-500' />

        <div className='flex flex-row items-center space-x-32 text-xl font-bold'>
          <div className='w-32 text-center'>00001234</div>
          <div className='w-32 text-center'>01/01/2024</div>
          <div className='w-32 text-center'>Nguyễn Văn A</div>
          <div className='w-32 text-center'>999.999</div>
          <div className='w-32 text-center text-[#FF0000]'>Đã giao</div>
          <button className='py-2 px-8 border-solid border-[1px] border-[#4848A4] font-semibold rounded-lg text-[#4848A4]'>
            Xem chi tiết
          </button>
        </div>
        <div className='w-full border-[0.5px] border-solid border-zinc-500' />
      </div>
    </div>
  )
}

export default OrderDetailView
