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
  args: {
    name: 'Click',
    backGroundColor: '#5ADEFF',
    status: 'active',
  },
}
