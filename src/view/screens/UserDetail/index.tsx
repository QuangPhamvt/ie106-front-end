import React from 'react'
import { FaEye, FaRegUserCircle } from 'react-icons/fa'
import { FaEyeLowVision } from 'react-icons/fa6'
import { CiLogout } from 'react-icons/ci'
import { useResetRecoilState } from 'recoil'
import { logInState } from '../LogIn/store/atom'
import { useNavigate } from 'react-router-dom'

const UserDetail: React.FC = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState<'Detail' | 'ChangePassword'>('Detail')
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false)
  const resetLogin = useResetRecoilState(logInState)
  return (
    <div className='container flex flex-row px-24 mx-auto mt-20 space-x-12 '>
      <div className='w-[34rem] text-white flex flex-col items-center justify-start border-[1px] border-solid border-gray-500 h-[52.25rem]'>
        <div className='flex flex-col items-center justify-center w-full space-y-4 h-80 '>
          <FaRegUserCircle size={120} color={'#4848A4'} />
          <div className='text-4xl text-[#4848A4]'>username</div>
        </div>
        <div className='w-full px-1 pt-1'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setState('Detail')
            }}
            className={`${
              state === 'Detail' ? 'text-[#4848A4]' : 'text-black'
            } w-full p-4 space-y-4 text-base font-medium border-t-2 border-solid text-start border-zinc-400`}
          >
            Thông tin cá nhân
          </button>
        </div>
        <div className='w-full px-1 pt-1'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setState('ChangePassword')
            }}
            className={`${
              state === 'ChangePassword' ? 'text-[#4848A4]' : 'text-black'
            } w-full p-4 space-y-4 text-base font-medium border-t-2 border-solid text-start border-zinc-400`}
          >
            Đổi mật khẩu
          </button>
        </div>
        <div className='flex items-end w-full text-black grow'>
          <div
            onClick={() => {
              resetLogin()
              navigate('/home')
            }}
            className='hover:cursor-pointer w-full p-4 flex flex-row border-t-[1px] border-solid border-zinc-500 items-center space-x-2 text-xl font-bold'
          >
            <CiLogout size={24} /> <p>Đăng xuất</p>
          </div>
        </div>
      </div>

      {state === 'Detail' && (
        <div className='flex flex-col w-full space-y-12'>
          <div className='text-2xl text-[#4848a4]'>Thông tin cá nhân</div>
          <form action='' className='flex flex-col w-full space-y-4 font-light text-zinc-500'>
            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Họ</div>
                <input type='text' className='w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500' />
              </div>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Tên</div>
                <input type='text' className='w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500' />
              </div>
            </div>

            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Địa chỉ email</div>
                <input type='text' className='w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500' />
              </div>
            </div>

            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Số điện thoại</div>
                <input type='text' className='w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500' />
              </div>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Ngày sinh</div>
                <input type='date' className='w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500' />
              </div>
            </div>
          </form>
          <div className='text-base font-light text-zinc-500'>
            Để đơn hàng được giải quyết dễ dàng, hãy điền đầy đủ thông tin của bạn cho chúng tôi nhé!
          </div>
          <div className='flex flex-row space-x-12 text-xl'>
            <button className='py-3 w-[10.75rem] rounded-lg border-[1px] border-solid border-[#4848A4] text-[#4848A4]'>
              Huỷ
            </button>
            <button className='py-3 bg-[#4848A4] w-[10.75rem] rounded-lg border-[1px] border-solid border-[#4848A4] text-white'>
              Lưu
            </button>
          </div>
        </div>
      )}
      {state === 'ChangePassword' && (
        <div className='flex flex-col w-full space-y-12'>
          <div className='text-2xl text-[#4848a4]'>Đổi mật khẩu</div>
          <form action='' className='flex flex-col w-full space-y-4 font-light text-zinc-500'>
            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Mật khẩu mới</div>
                <div className='w-full p-2 flex items-center flex-row rounded-lg border-[0.5px] border-solid border-zinc-500'>
                  <input type={`${isShowPassword ? 'text' : 'password'}`} className='grow' />
                  {isShowPassword ? (
                    <div onClick={() => setIsShowPassword(false)}>
                      <FaEyeLowVision />
                    </div>
                  ) : (
                    <div onClick={() => setIsShowPassword(true)}>
                      <FaEye />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Nhập lại mật khẩu mới</div>
                <div className='w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500'>
                  <input type='password' className='w-full' />
                </div>
              </div>
            </div>
          </form>
          <div className='text-base font-light text-zinc-500'>
            Sử dụng tối thiểu 8 ký tự, và tối đa 15 ký tự. Chỉ bao gồm số, chữ thường, chữ in hoa và ký tự đặc biệt
          </div>
          <div className='flex flex-row space-x-12 text-xl'>
            <button className='py-3 w-[10.75rem] rounded-lg border-[1px] border-solid border-[#4848A4] text-[#4848A4]'>
              Huỷ
            </button>
            <button className='py-3 bg-[#4848A4] w-[10.75rem] rounded-lg border-[1px] border-solid border-[#4848A4] text-white'>
              Lưu
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDetail
