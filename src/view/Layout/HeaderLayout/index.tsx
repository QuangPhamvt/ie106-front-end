import { ContentHeaderComponent } from './components/ContentHeaderComponent'
import { NavHeaderLayoutComponent } from './components/NavHeaderComponent'
import { SubNavHeaderComponent } from './components/SubNavHeaderComponent'

export const HeaderLayout = () => {
  return (
    <header className='flex flex-col w-screen bg-slate-400'>
      <NavHeaderLayoutComponent />
      <ContentHeaderComponent />
      <SubNavHeaderComponent />
    </header>
  )
}
