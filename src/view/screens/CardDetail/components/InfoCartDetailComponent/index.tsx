import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { GrSubtract } from 'react-icons/gr'
import { Button } from '@/components/atoms/button'
import { useNavigate } from 'react-router-dom'

interface QuantityInfoCartDetailComponentProps {
  quantity: number
}
interface PriceInfoCartDetailComponentProps {
  price: number
}
interface InfoCartDetailComponentProps extends React.ComponentProps<'article'> {}
export const HeaderInfoCartDetailComponent = () => {
  return (
    <section className='inline-flex items-center space-x-2'>
      <p className='font-bold text-[#4848A4] text-xl'>Giao hàng đến:</p>
      <p className='text-xl text-[#666666]'>Q1, P. Ben nghe</p>
    </section>
  )
}
export const AddressInfoCartDetailComponent = () => {
  return (
    <section className='flex flex-col'>
      <p className='text-xl text-[#666666]'>Giao Thứ Tư</p>
      <p className='text-xl text-[#666666]'>Trước 19h, 15/11: 23.000₫</p>
    </section>
  )
}
export const QuantityInfoCartDetailComponent: React.FC<QuantityInfoCartDetailComponentProps> = (props) => {
  const { quantity = 1 } = props
  return (
    <section className='flex flex-row items-center justify-start space-x-4 w-full p-[10px]'>
      <p className='font-bold'>Số Lượng</p>
      <div className='flex flex-row border-[1px] border-solid border-gray-400 justify-center items-center space-x-4 py-1 px-4 rounded-lg'>
        <GrSubtract />
        <p>{quantity}</p>
        <FaPlus />
      </div>
    </section>
  )
}
export const PriceInfoCartDetailComponent: React.FC<PriceInfoCartDetailComponentProps> = (props) => {
  const { price = 10000 } = props
  return (
    <section className='flex flex-row items-center justify-start space-x-4 w-full p-[10px]'>
      <p className='font-bold text-[#4848A4]'>Tạm Tính</p>
      <p className=''>{price}đ</p>
    </section>
  )
}
export const ButtonInfoCartDetailComponent = () => {
  const navigate = useNavigate()
  return (
    <section className='flex flex-row items-center justify-center space-x-4 w-full p-[10px]'>
      <Button
        onClick={(event) => {
          event.preventDefault()
          navigate('/checkout')
        }}
        variant='contained'
        width={'240px'}
        height='40px'
      >
        Mua Ngay
      </Button>
      <Button
        onClick={(event) => {
          event.preventDefault()
          navigate('/cart')
        }}
        width={'240px'}
        height={'40px'}
        variant={'outlined'}
        rounded={'md'}
      >
        Thêm vào giỏ hàng
      </Button>
    </section>
  )
}
export const InfoCartDetailComponent: React.FC<InfoCartDetailComponentProps> = () => {
  return (
    <article className='w-[640px] flex flex-col border-[1px] border-solid border-[#4848A4] rounded-lg p-4 space-y-4'>
      <HeaderInfoCartDetailComponent />
      <div className='w-full border-solid border-b-[1px] border-[#666666]' />
      <AddressInfoCartDetailComponent />
      <QuantityInfoCartDetailComponent quantity={1} />
      <PriceInfoCartDetailComponent price={100000} />
      <ButtonInfoCartDetailComponent />
    </article>
  )
}
