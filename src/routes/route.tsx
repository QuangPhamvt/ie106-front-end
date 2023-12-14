import { createBrowserRouter } from 'react-router-dom'
import { PATH } from './PATH'
import Layout from '@/Layout'
import { HomeView } from '@/view/Home'

const router = createBrowserRouter([
  {
    path: PATH.AUTH,
    element: <Layout />,
    children: [
      {
        path: PATH.HOME,
        element: <HomeView />,
      },
    ],
  },
])

export default router
