import React from 'react'

const OriginCartDetail: React.FC = () => {
  return (
    <div className='container mx-auto p-2.5 flex flex-col justify-center items-center space-y-[1.625rem] w-[80rem]'>
      <div className='flex flex-col w-full px-4 py-2 space-y-2 shadow-xl border-[0.5px] border-solid border-gray-300'>
        <div className='py-2 text-3xl'>
          <p>CHI TIẾT ĐƠN HÀNG</p>
        </div>
        <div className='px-4 rounded-full bg-[#A2E7A9] w-fit text-[#27772F] font-medium'>Đơn hàng hoàn tất</div>
        <div className='flex flex-col py-3 text-xl font-[350] space-y-1'>
          <div>
            Mã đơn hàng: <strong>103243434</strong>
          </div>
          <div>
            Ngày mua: <strong>18/07/2023</strong>
          </div>
          <div>
            Tổng tiền: <strong>153.335d</strong>
          </div>
          <div>Ghi chú: (Không có)</div>
        </div>
      </div>
      <div className='flex w-full px-4 border-[0.5px] border-solid border-gray-300 shadow-xl'>
        <div className='py-2 pl-4 space-y-3 grow'>
          <div className='text-3xl '>Thông tin người nhận</div>
          <div className='flex flex-col space-y-3 text-xl font-light'>
            <p>Trần Lê Khánh Hân</p>
            <p>11 Đoàn Kết, TP. Thủ Đức, TP.Hồ Chí Minh, Việt Nam</p>
            <p>Tel: 0383188154</p>
          </div>
        </div>
        <div className='h-auto border-[0.5px] border-solid border-gray-300'></div>
        <div className='w-1/2 py-2 pl-4'>
          <div className='text-3xl'>Phương thức thanh toán</div>
          <div className='flex flex-col space-y-3 text-xl font-light'>
            <p className='py-4'>Thanh toán khi nhận hàng</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full px-4 border-[0.5px] border-solid border-gray-300 shadow-xl space-y-2 text-base'>
        <div className='flex justify-between w-full py-6 text-xl'>
          <div className='w-[6%] text-center'>STT</div>
          <div className='w-1/12'>Hình ảnh</div>
          <div className='w-5/12'>Tên sản phẩm</div>
          <div className='w-1/12'>Giá tiền</div>
          <div className='w-1/12'>Số lượng</div>
          <div className='w-1/12'>Thành tiền</div>
        </div>
        <div className='flex justify-between w-full py-2 text-xl border-t-[1px] border-gray-300 items-center '>
          <div className='w-[6%] text-center flex items-center justify-center'>
            <p>1</p>
          </div>
          <div className='w-1/12'>
            <div className='w-[80px] h-[112px] '>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/origin-1.png' alt='' />
            </div>
          </div>
          <div className='w-5/12'>Chàng Băng Giá Và Nàng Lạnh Lùng - 3</div>
          <div className='w-1/12'>188.888d</div>
          <div className='w-1/12 text-center'>1</div>
          <div className='w-1/12'>188.888d</div>
        </div>
        <div className='flex justify-between w-full py-2 text-xl border-t-[1px] border-gray-300 items-center '>
          <div className='w-[6%] text-center flex items-center justify-center'>
            <p>2</p>
          </div>
          <div className='w-1/12'>
            <div className='w-[80px] h-[112px] '>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/origin-2.png' alt='' />
            </div>
          </div>
          <div className='w-5/12'>Skip and Loafer - Nhịp Bước Tuổi Xanh - 1</div>
          <div className='w-1/12'>188.888d</div>
          <div className='w-1/12 text-center'>1</div>
          <div className='w-1/12'>188.888d</div>
        </div>
        <div className='flex font-[350] justify-end space-x-2 w-full py-6 text-xl border-t-[1px] border-gray-300 items-center'>
          <div className='flex flex-col items-end'>
            <p>Thành tiền:</p>
            <p>Phí vận chuyển:</p>
            <p>Gỉảm giá:</p>
            <p>Tổng Số Tiền (gồm VAT):</p>
          </div>
          <div className='flex flex-col items-end font-medium'>
            <p>376.000d</p>
            <p>Miễn phí</p>
            <p>0</p>
            <p>376.000d</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full '>
        <button className='border-solid border-[1px] border-[#4848A4] p-3 rounded-lg font-[450] text-[#4848a4]'>
          Xem danh sách đơn hàng
        </button>
      </div>
    </div>
  )
}

export default OriginCartDetail
