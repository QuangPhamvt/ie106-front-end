import React from 'react'

const CartListView: React.FC = () => {
  return (
    <>
      <div className='container flex flex-col py-8 mx-auto'>
        <div className='text-3xl'>GIỎ HÀNG</div>
      </div>
      <div className='bg-[#7775C5] container mx-auto flex flex-col px-52 py-6'>
        <div className='flex flex-row items-center space-x-4 text-2xl text-white'>
          <div className='flex flex-row w-2/5 space-x-4'>
            <input type='checkbox' name='' id='' className='border-solid border-[2px] border-black w-6 rounded-lg' />
            <p>Chọn tất cả</p>
          </div>
          <div className='w-1/5 text-center'>Số lượng</div>
          <div className='w-1/5 text-center'>Thành tiền</div>
        </div>
      </div>

      <div className='container flex flex-col py-12 mx-auto px-52 border-b-[0.5px] border-solid border-gray-500 '>
        <div className='flex flex-row items-center space-x-4 text-2xl '>
          <div className='flex flex-row items-center w-2/5 space-x-6'>
            <input type='checkbox' className='border-solid border-[2px] border-black h-6 w-6 rounded-lg' />
            <div className='w-16 h-20 bg-gray-600' />
            <p>Chàng Băng Giá Và Nàng Lạnh Lùng - 3</p>
          </div>
          <div className='w-1/5 text-center'>
            <input
              type='number'
              className='w-3/5 h-8 text-center border-gray-400 border-solid rounded-lg border-[1px]'
            />
          </div>
          <div className='w-1/5 text-center text-[#003499]'>188.888d</div>
          <div className='w-[10%] text-center'>Xoa</div>
        </div>
      </div>

      <div className='container flex flex-col py-12 mx-auto px-52 border-b-[0.5px] border-solid border-gray-500 '>
        <div className='flex flex-row items-center space-x-4 text-2xl '>
          <div className='flex flex-row items-center w-2/5 space-x-6'>
            <input type='checkbox' className='border-solid border-[2px] border-black h-6 w-6 rounded-lg' />
            <div className='w-16 h-20 bg-gray-600' />
            <p>Skip and Loafer - Nhịp Bước Tuổi Xanh - 1</p>
          </div>
          <div className='w-1/5 text-center'>
            <input
              type='number'
              className='w-3/5 h-8 text-center border-gray-400 border-solid rounded-lg border-[1px]'
            />
          </div>
          <div className='w-1/5 text-center text-[#003499]'>188.888d</div>
          <div className='w-[10%] text-center'>Xoa</div>
        </div>
      </div>

      <div className='container flex flex-col items-end pt-12 mx-auto space-y-8 pr-28'>
        <div className='flex flex-row items-center space-x-16 text-xl font-bold'>
          <div>Tổng cộng</div>
          <div className='text-[#003499]'>566.666d</div>
        </div>
        <div className=''>
          <button className='py-4 bg-[#003499] px-12 rounded-xl text-white'>THANH TOÁN</button>
        </div>
      </div>
    </>
  )
}

export default CartListView
