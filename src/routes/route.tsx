import { createBrowserRouter } from 'react-router-dom'
import { PATH } from './PATH'
import { HeaderLayout } from '../Layout/HeaderLayout'

const router = createBrowserRouter([
  {
    path: PATH.AUTH,
    element: <HeaderLayout />,
  },
])

export default router
