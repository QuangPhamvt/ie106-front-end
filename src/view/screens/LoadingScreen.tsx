import React from 'react'
import { BarLoader } from 'react-spinners'

const LoadingScreen = (): React.ReactNode => {
  return (
    <div className='flex items-end justify-center w-screen h-screen'>
      <BarLoader width={600} />
    </div>
  )
}

export default LoadingScreen
