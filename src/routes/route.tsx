import { createBrowserRouter } from 'react-router-dom'
import { PATH } from './PATH'
import { LogInView, Layout, HomeView, SignUpView, CardDetailView } from '@/view'

const router = createBrowserRouter([
  {
    path: PATH.AUTH,
    element: <Layout />,
    children: [
      {
        path: PATH.HOME,
        element: <HomeView />,
      },
      {
        path: PATH.CARD_DETAIL,
        element: <CardDetailView />,
      },
    ],
  },
  {
    path: PATH.LOG_IN,
    element: <LogInView />,
  },
  {
    path: PATH.SIGN_UP,
    element: <SignUpView />,
  },
])

export default router
