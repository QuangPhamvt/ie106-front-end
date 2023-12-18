import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const SearchContentHeaderComponent = () => {
  const navigate = useNavigate()
  const [textInput, setTextInput] = React.useState<string | null>(null)
  return (
    <section className='flex flex-row items-center justify-center col-span-5 space-x-4 px-2.5 w-full '>
      <div className=' flex items-center justify-between border-2 rounded-2xl py-2 px-4 border-solid w-[60%] animate-fade-left'>
        <input
          placeholder='Enter to search manage'
          type='text'
          className='grow'
          value={textInput || ''}
          onChange={(event) => {
            setTextInput(event.target.value)
          }}
          onSubmit={() => navigate(`/search?q=${textInput}`)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') navigate(`/search?q=${textInput}`)
          }}
        />
        <button onClick={() => navigate(`/search?q=${textInput}`)}>
          <FaSearch />
        </button>
      </div>
      <FaShoppingCart size={44} color='#4848A4' />
    </section>
  )
}
