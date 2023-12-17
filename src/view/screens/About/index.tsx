import React from 'react'

const AboutView: React.FC = () => {
  return (
    <div className='container flex flex-col items-center justify-center mx-auto mt-10 space-y-10 '>
      <div className='flex flex-col p-10 space-y-5 xl:w-[1280px] border-[1px] border-solid border-[#4848A4] rounded-xl'>
        <div className='text-4xl font-bold text-[#4848A4]'>Về chúng mình</div>
        <div className='flex flex-col p-10 space-y-5'>
          <div className='flex flex-row items-center text-2xl'>
            <div className='w-1/2 font-bold grow text-[#4848A4]'>Văn phòng</div>
            <div className='w-1/2 text-xl font-light text-zinc-500'>
              17/183 Dang Tien Dong, Trung Liet, Dong Da, Ha Noi
            </div>
          </div>
          <div className='w-full border-[1px] border-solid border-gray-500' />

          <div className='flex flex-row items-center justify-between text-2xl'>
            <div className='w-1/2 font-bold grow text-[#4848A4]'>Thành lập năm</div>
            <div className='w-1/2 text-xl font-light text-zinc-500'>1969</div>
          </div>
          <div className='w-full border-[1px] border-solid border-gray-500' />

          <div className='flex flex-row items-center justify-between text-2xl'>
            <div className='w-1/2 font-bold grow text-[#4848A4]'>Lợi nhuận</div>
            <div className='w-1/2 text-xl font-light text-zinc-500'>69.000.000đ</div>
          </div>
          <div className='w-full border-[1px] border-solid border-gray-500' />

          <div className='flex flex-row items-center justify-between text-2xl'>
            <div className='w-1/2 font-bold grow text-[#4848A4]'>Lãnh Đạo</div>
            <div className='w-1/2 text-xl font-light text-zinc-500'>Pham Minh Quang</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-10 space-y-5 xl:w-[1280px] border-[1px] border-solid border-[#4848A4] rounded-xl'>
        <div className='text-4xl font-bold text-[#4848A4]'>Lịch sử</div>
        <div className='flex flex-row pl-10 space-x-24 text-xl'>
          <div className='text-4xl font-bold text-[#3896D6]'>2023</div>

          <div className='flex flex-col w-full space-y-10'>
            <div className='flex flex-row space-x-10'>
              <div className='w-1/6'>September</div>
              <div className='flex flex-col space-y-4 text-zinc-600 font-[350]'>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Thiết kế</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Tạo công cụ</p>
                </div>
              </div>
            </div>

            <div className='flex flex-row w-full space-x-10'>
              <div className='w-1/6'>October</div>
              <div className='flex flex-col space-y-4 text-zinc-600 font-[350]'>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Làm form</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Gửi form</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Nhận phản hồi</p>
                </div>
              </div>
            </div>

            <div className='flex flex-row w-full space-x-10'>
              <div className='w-1/6'>November</div>
              <div className='flex flex-col space-y-4 text-zinc-600 font-[350]'>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Làm slide seminar</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Thiết kế trang</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Leader code</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]' />
                  <p>Trang được tạo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutView
