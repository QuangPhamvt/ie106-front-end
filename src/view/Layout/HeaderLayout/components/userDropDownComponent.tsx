/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { dropDownUserDetailHeaderAtom } from '../store/atom'
import { FaChevronDown, FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const UserDropDownComponent: React.FC = () => {
  const navigate = useNavigate()
  const [openDropDown, setOpenDropDown] = useRecoilState(dropDownUserDetailHeaderAtom)
  return (
    <section
      hidden={openDropDown.open === false}
      style={{
        top: 60,
        right: 16,
        zIndex: 90000,
      }}
      className='absolute  w-40  bg-white rounded-md  border-[0.5px] shadow-2xl animate-fade-down animate-duration-500'
    >
      <div style={{ zIndex: 90000 }} className='flex flex-col items-start text-black '>
        <div className='w-full hover:bg-zinc-200'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setOpenDropDown({ open: false })
              navigate('/user')
            }}
            className='px-4 py-2 font-normal text-[#4848a4] border-gray-400 border-solid rounded '
          >
            Tài khoản
          </button>
        </div>
        <div className='w-full hover:bg-zinc-200'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setOpenDropDown({ open: false })
              navigate('/order')
            }}
            className='px-4 py-2 font-normal text-[#4848A4] border-gray-400 border-solid rounded '
          >
            Đơn hàng
          </button>
        </div>
        <div className='w-full hover:bg-zinc-200'>
          <button className='px-4 py-2 font-normal text-[#4848A4] border-gray-400 border-solid rounded '>
            Đăng xuất
          </button>
        </div>
      </div>
    </section>
  )
}
const UserDetailHeaderComponent = () => {
  const menuRef = React.useRef<HTMLElement>(null)
  const setOpenDropDown = useSetRecoilState(dropDownUserDetailHeaderAtom)
  const handelOpenDropDown = () => {
    setOpenDropDown((preState) => ({ ...preState, open: !preState.open }))
  }
  React.useLayoutEffect(() => {
    const handleDropDown = (event: any) => {
      if (!menuRef.current || !menuRef.current.contains) return
      if (!menuRef.current.contains(event.target)) {
        setOpenDropDown((preState) => ({ ...preState, open: false }))
      }
    }
    window.document.addEventListener('mousedown', handleDropDown)
    return () => window.document.removeEventListener('mousedown', handleDropDown)
  }, [setOpenDropDown])
  return (
    <section className='relative flex flex-row items-center justify-center px-4 space-x-3' ref={menuRef}>
      <FaRegUserCircle size={32} />
      <button
        onClick={handelOpenDropDown}
        className='flex items-center py-2 border-solid rounded-lg 4 border-1 border-gray-50'
      >
        <p className='text-lg font-bold text-white'>Username</p>
      </button>
      <FaChevronDown size={16} />
      <UserDropDownComponent />
    </section>
  )
}

export default UserDetailHeaderComponent
