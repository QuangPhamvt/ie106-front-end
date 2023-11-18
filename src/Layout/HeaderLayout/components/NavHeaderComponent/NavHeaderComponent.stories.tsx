import { Meta, StoryObj } from '@storybook/react'
import { NavHeaderLayoutComponent } from '.'

const meta: Meta<typeof NavHeaderLayoutComponent> = {
  tags: ['autodocs'],
  title: 'Component/Molecules/NavHeaderComponent',
  component: NavHeaderLayoutComponent,
}

export default meta
type Story = StoryObj<typeof NavHeaderLayoutComponent>
export const DefaultNavHeaderLayout: Story = {}
