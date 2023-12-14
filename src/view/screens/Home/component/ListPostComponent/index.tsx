import React from 'react'
const ListPostComponent: React.FC = () => {
  return (
    <div className='flex flex-col w-screen space-y-4'>
      <div className='w-full py-8 mx-16 text-4xl'>DANH MỤC SẢN PHẨM</div>
      <div className='flex flex-row justify-center space-x-14'>
        <div className='py-2 rounded-lg border-2 border-solid border-[#4848A4] h-40 w-48 flex flex-col items-center'>
          <div className='w-12 bg-gray-300 grow'></div>
          <div className='text-[#4848A4]'>BOX SET</div>
        </div>
        <div className='py-2 rounded-lg border-2 border-solid border-[#4848A4] h-40 w-48 flex flex-col items-center'>
          <div className='w-12 bg-gray-300 grow'></div>
          <div className='text-[#4848A4]'>BOX SET</div>
        </div>
        <div className='py-2 rounded-lg border-2 border-solid border-[#4848A4] h-40 w-48 flex flex-col items-center'>
          <div className='w-12 bg-gray-300 grow'></div>
          <div className='text-[#4848A4]'>BOX SET</div>
        </div>
        <div className='py-2 rounded-lg border-2 border-solid border-[#4848A4] h-40 w-48 flex flex-col items-center'>
          <div className='w-12 bg-gray-300 grow'></div>
          <div className='text-[#4848A4]'>BOX SET</div>
        </div>
        <div className='py-2 rounded-lg border-2 border-solid border-[#4848A4] h-40 w-48 flex flex-col items-center'>
          <div className='w-12 bg-gray-300 grow'></div>
          <div className='text-[#4848A4]'>BOX SET</div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full py-8'>
        <button className='py-2 bg-[#4848A4] font-normal text-xl px-8 rounded-full text-white'>XEM TẤT CẢ</button>
      </div>
    </div>
  )
}

export default ListPostComponent
