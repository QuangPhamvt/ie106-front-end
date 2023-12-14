import { Meta, StoryObj } from '@storybook/react'
import { ContentHeaderComponent } from '.'

const meta: Meta<typeof ContentHeaderComponent> = {
  tags: ['autodocs'],
  title: 'Component/Molecules/ContentHeaderComponent',
  component: ContentHeaderComponent,
}
export default meta
type story = StoryObj<typeof ContentHeaderComponent>
export const DefaultContentHeaderComponent: story = {}
