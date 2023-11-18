import { NotificationContentHeaderComponent, SearchContentHeaderComponent } from './components'

export const ContentHeaderComponent = () => {
  return (
    <article className='grid content-center w-full grid-cols-12 pt-4 bg-white justify-items-center'>
      <NotificationContentHeaderComponent />
      <div className='w-full h-full col-span-2 bg-purple-600'>
        <img
          src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE104/Screenshot%202023-11-18%20at%2010.46.55%E2%80%AFPM.png'
          alt=''
        />
      </div>
      <SearchContentHeaderComponent />
    </article>
  )
}
