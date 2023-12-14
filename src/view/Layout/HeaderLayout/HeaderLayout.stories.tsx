import { Meta, StoryObj } from '@storybook/react'
import { HeaderLayout } from '.'

const meta: Meta<typeof HeaderLayout> = {
  tags: ['autodocs'],
  title: 'Component/Organims/HeaderLayout',
  component: HeaderLayout,
}
export default meta
type story = StoryObj<typeof HeaderLayout>
export const DefaultHeaderLayout: story = {}
