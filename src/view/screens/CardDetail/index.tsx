import React from 'react'
import { InfoCartDetailComponent } from './components/InfoCartDetailComponent'

const CardDetailView: React.FC = () => {
  const [isShowMoreText, setIsShowMoreText] = React.useState<boolean>(false)
  return (
    <div className='container flex flex-row flex-wrap justify-center p-10 mx-auto '>
      <div className='flex flex-col p-5 border-[1px] border-[#4848A4] rounded-lg h-fit'>
        <div className='flex flex-col items-center p-5 space-y-5'>
          <div className='2xl:h-[37rem] 2xl:w-[37rem] h-[32rem] w-[32rem] aspect-square bg-gray-300 border-[1px] border-[#4848A4] rounded-lg'>
            <img
              src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png'
              className='w-full aspect-square'
              alt=''
            />
          </div>
          <div className='flex flex-row justify-between 2xl:w-[37rem] w-[32rem] h-[6.25rem]'>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
          </div>
          <div className='flex flex-col space-y-5 text-xl w-[28.625rem] px-5 font-light'>
            <p className='text-xl text-[#4848A4] font-bold'>Đặc điểm nổi bật</p>
            <div className='flex items-center space-x-3'>
              <div className='border-4 rounded-full h-0 border-solid border-[#4848A4]' />
              <p>Câu chuyện tình yêu sâu sắc và tinh tế.</p>
            </div>
            <div className='flex items-center space-x-3'>
              <div className='border-4 rounded-full h-0 border-solid border-[#4848A4]' />
              <p>Ngôn ngữ hài hước và lãng mạn.</p>
            </div>
            <div className='flex items-center space-x-3'>
              <div className='border-4 rounded-full h-0 border-solid border-[#4848A4]' />
              <p>Được ủng hộ nhiệt tình và nằm trong top 10 Kono Light novel ga Sugoi.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col px-10 mt-6 space-y-5 2xl:mt-0'>
        <div className='w-[640px] flex flex-col border-[1px] border-solid border-[#4848A4] rounded-lg p-4 space-y-4'>
          <p className='text-[32px] font-bold text-[#4848A4]'>Thiên sứ nhà bên - Tập 7 - Bản Giới Hạn</p>
          <p className='text-4xl font-bold text-[#FF424E]'>90.000đ</p>
        </div>

        <InfoCartDetailComponent />

        <div className='w-[640px] flex flex-col border-[1px] border-solid border-[#4848A4] rounded-lg p-4 space-y-4'>
          <div className='flex flex-col w-full space-y-2 text-xl font-bold text-[#4848A4]'>
            <p>Thông tin chi tiết</p>
            <div className='w-full border-b-[1px] border-black border-solid h-[1px]' content='' />
          </div>
          <div className='flex flex-row space-x-5'>
            <div className='flex flex-col text-xl font-light text-[#666666]'>
              <p>Hàng chính hãng</p>
              <p>Công ty phát hành</p>
              <p>Số trang</p>
              <p>Nhà xuất bản</p>
            </div>
            <div className='flex flex-col text-xl font-light text-black'>
              <p>Có</p>
              <p>Nhà Xuất Bản Kim Đồng</p>
              <p>Có</p>
              <p>Kim Đồng</p>
            </div>
          </div>
        </div>

        <div className='w-[640px] flex flex-col border-[1px] border-solid border-[#4848A4] rounded-lg p-4 space-y-4'>
          <div className='flex flex-col w-full space-y-2 text-xl font-bold text-[#4848A4]'>
            <p className='text-2xl font-bold text-[#4848A4]'>Mô tả sản phẩm</p>
            <div className='w-full border-b-[1px] border-black border-solid h-[1px]' content='' />
          </div>
          <p className={`text-xl text-justify font-light ${!isShowMoreText ? 'line-clamp-3' : 'animate-fade-down'}`}>
            Nhờ có Mahiru luôn ở bên, Amane đã dũng cảm đối diện với những hồi ức đau khổ trong quá khứ. Trong chuyến về
            thăm nhà bố mẹ Amane, khi cảm nhận được sự chăm sóc, quan tâm và tình cảm ấm áp từ gia đình, Mahiru thấy rất
            hạnh phúc. Ngắm nhìn cô với nụ cười chan chứayêu thương, Amane một lần nữa củng cố quyết tâm sẽ luôn ở bên
            chăm sóc cô.Vào những ngày cuối mùa hè, cả hai đã cùng mặc yukata đến lễ hội . Dù thật chậm rãi, nhưng cả
            Amane và Mahiru đều dần biết cách thể hiện cảm xúc của mình một cách thẳng thắn hơn, khiến những kí ức mùa
            hè của họ càng trở nên sâu sắc.Đây là câu chuyện tình ngọt ngào với cô gái nhà bên tuy lạnh lùng nhưng thật
            đáng yêu đã được ủng hộ nhiệt tình trên trang Shousetsuka ni Narou.*THIÊN SỨ NHÀ BÊN được xem là cú hit của
            dòng Light Novel rom-com tại thị trường Nhật Bản, với nội dung hài hước - lãng mạn rất được yêu thích. Tác
            phẩm nằm top 10 Kono Light novel ga Sugoi năm 2021, đã bán ra 1,5 triệu bản, được chuyển thể thành manga và
            anime.Số tập: 8+ (on-going) Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào
            loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ
            phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
          </p>
          {!isShowMoreText && (
            <div className={`flex justify-center w-full`}>
              <p className='hover:cursor-pointer text-[#4848A4]' onClick={() => setIsShowMoreText(!isShowMoreText)}>
                Xem Thêm
              </p>
            </div>
          )}
          {isShowMoreText && (
            <div className={`flex justify-center w-full`}>
              <p className='hover:cursor-pointer text-[#4848A4]' onClick={() => setIsShowMoreText(!isShowMoreText)}>
                Ít lại
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardDetailView
