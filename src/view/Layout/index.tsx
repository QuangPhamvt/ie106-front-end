import { Outlet } from 'react-router-dom'
import { HeaderLayout } from './HeaderLayout'
import FooterLayout from './Footer'

const Layout = () => {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  )
}
export default Layout
