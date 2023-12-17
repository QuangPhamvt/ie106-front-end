import { FaShoppingCart } from 'react-icons/fa'

export const SearchContentHeaderComponent = () => {
  return (
    <section className='flex flex-row items-center justify-center col-span-5 space-x-4 px-2.5 w-full '>
      <input
        placeholder='Enter to search manage'
        className='border-2 rounded-2xl py-2 px-4 border-solid w-[60%] animate-fade-left'
        type='text'
      />
      <FaShoppingCart size={44} color='#4848A4' />
    </section>
  )
}
