import { Outlet } from 'react-router-dom'
import { HeaderLayout } from './HeaderLayout'

const Layout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
    </>
  )
}
export default Layout
