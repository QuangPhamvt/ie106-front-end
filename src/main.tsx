import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import withSuspense from './HOC/withSuspense.tsx'
import LoadingScreen from './view/screens/LoadingScreen.tsx'
const App = withSuspense(
  React.lazy(() => import('@/App.tsx')),
  <LoadingScreen />,
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
