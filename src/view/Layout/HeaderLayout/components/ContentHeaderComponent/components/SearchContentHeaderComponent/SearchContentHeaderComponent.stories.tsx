import { Meta, StoryObj } from '@storybook/react'
import { SearchContentHeaderComponent } from '.'

const meta: Meta<typeof SearchContentHeaderComponent> = {
  tags: ['autodocs'],
  title: 'Component/Atoms/Search Content Header component',
  component: SearchContentHeaderComponent,
}
export default meta
type story = StoryObj<typeof SearchContentHeaderComponent>
export const DefaultSearchContentHeaderComponent: story = {}
