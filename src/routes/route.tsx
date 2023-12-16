/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { PATH } from './PATH'
import { HomeView, CardDetailView, AboutView, OrderDetailView, CartListView } from '@/view'
import withSuspense from '@/HOC/withSuspense'
import LoadingScreen from '@/view/screens/LoadingScreen'
import UserDetail from '@/view/screens/UserDetail'
import { RouteObject } from 'react-router-dom'

const Layout = withSuspense(
  React.lazy(() => import('@/view/Layout')),
  <LoadingScreen />,
)
const LogInView = withSuspense(
  React.lazy(() => import('@/view/screens/LogIn')),
  <LoadingScreen />,
)
const SignUpView = withSuspense(
  React.lazy(() => import('@/view/screens/SignUp')),
  <LoadingScreen />,
)

export const routes: RouteObject[] = [
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
      {
        path: PATH.USER_DETAIL,
        element: <UserDetail />,
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
]
