import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './route'

const router = createBrowserRouter(routes)
export const Router = () => {
  return <RouterProvider router={router} fallbackElement={<p>Loading....</p>} />
}
