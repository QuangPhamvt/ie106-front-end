import React from 'react'
import { BarLoader } from 'react-spinners'

const LoadingScreen = (): React.ReactNode => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <BarLoader height={10} width={600} />
    </div>
  )
}

export default LoadingScreen
