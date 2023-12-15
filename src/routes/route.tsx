import { createBrowserRouter } from 'react-router-dom'
import { PATH } from './PATH'
import {
  LogInView,
  Layout,
  HomeView,
  SignUpView,
  CardDetailView,
  AboutView,
  OrderDetailView,
  CartListView,
} from '@/view'

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
      {
        path: PATH.ABOUT,
        element: <AboutView />,
      },
      {
        path: PATH.ORDER_DETAIL,
        element: <OrderDetailView />,
      },
      {
        path: PATH.CART_LIST,
        element: <CartListView />,
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
