import React from 'react'
import { FaBookOpen, FaPager, FaTruckMonster } from 'react-icons/fa'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ItemPostComponent: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/product')}
      className='md:w-[20rem] lg:w-[14.75rem] w-[24rem] flex flex-col items-center  hover:shadow-2xl hover:cursor-pointer mb-4 item-content-hidden item'
    >
      <div className='w-full h-[23.5rem] bg-gray-300'>
        <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test-2.png' alt='' />
      </div>
      <div className='px-4 py-2 text-xl text-center'>Tên sách (bản thường) - Tên tác giả</div>
      <div className='text-[#4848A4] font-medium py-4'>188.000d</div>
    </div>
  )
}

const SearchView: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [items, setItems] = React.useState<Array<string>>(['a'])
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('item-content-show')
        } else {
          entry.target.classList.remove('item-content-show')
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.item-content-hidden')
    const hiddenElementsRight = document.querySelectorAll('.item-content-hidden-right')
    hiddenElements.forEach((el) => observer.observe(el))
    hiddenElementsRight.forEach((el) => observer.observe(el))
  }, [items])

  return (
    <article className='flex flex-col'>
      <div className='container flex flex-col w-full mx-auto'>
        <div className='py-12'>
          <p className='text-2xl'>Danh sách từ khoá "{searchParams.get('q')}"</p>
        </div>
        {items.map((item, index) => {
          return (
            <div key={`${item} + ${index}`} className='container flex flex-row flex-wrap justify-around px-8 mx-auto '>
              <ItemPostComponent />
              <ItemPostComponent />
              <ItemPostComponent />
              <ItemPostComponent />
              <ItemPostComponent />
            </div>
          )
        })}

        <div className='flex justify-center w-full py-8'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setItems((preState) => [...preState, 'a'])
            }}
            className='py-2 px-7 rounded-full text-[#4848A4] font-medium border-[3px] border-solid border-[#4848A4]'
          >
            Xem thêm
          </button>
        </div>
      </div>

      <div className='w-full  bg-[#4848A4] flex flex-col justify-center items-center space-y-8 py-8'>
        <p className='text-4xl font-medium text-white'>BANU STORE - TIỆM SÁCH CỦA BẠN</p>
        <div className='flex flex-row space-x-36'>
          <div className='flex flex-col items-center space-y-4 w-52'>
            <FaTruckMonster size={120} color={'white'} />
            <p className='text-2xl text-center text-white'>Vân chuyển nhanh chóng</p>
          </div>
          <div className='flex flex-col items-center space-y-4 w-52'>
            <FaPager size={120} color={'white'} />
            <p className='text-2xl text-center text-white'>Khuyến mãi hấp dẫn</p>
          </div>
          <div className='flex flex-col items-center space-y-4 w-52'>
            <FaBookOpen size={120} color={'white'} />
            <p className='text-2xl text-center text-white'>Sách truyện phong phú</p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: 'url(https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/header-expect.png)' }}
        className='w-screen h-[27rem] flex flex-col justify-center items-center space-y-4 bg-[#4848A4] text-white'
      >
        <div className='w-screen h-full flex flex-col justify-center items-center space-y-4 bg-[#4848A4]/60 text-white'>
          <p className='mt-8 text-6xl font-medium'>HÃY ĐẾN CỬA HÀNG CỦA CHÚNG TÔI</p>
          <p className='text-2xl font-medium'>Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh</p>
          <div className='flex items-center justify-center py-4'>
            <button className='w-[15.75rem] py-2 border-[2px] border-solid border-white rounded-3xl text-white font-medium'>
              <a href='https://oven.sh/' target='_blank'>
                Tìm hiểu thêm
              </a>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
export default SearchView
