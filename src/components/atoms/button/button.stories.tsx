import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  title: 'Component/Atoms/Button',
  component: Button,
}
export default meta
type Story = StoryObj<typeof Button>
export const ButtonDefault: Story = {
  argTypes: {
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    variant: {
      control: { type: 'radio' },
      options: ['outlined', 'contained'],
    },
    rounded: {
      control: { type: 'radio' },
      options: ['md', 'lg', 'xl', '2xl'],
    },
  },
}
