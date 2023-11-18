import { Meta, StoryObj } from '@storybook/react'
import { NotificationContentHeaderComponent } from '.'

const meta: Meta<typeof NotificationContentHeaderComponent> = {
  tags: ['autodocs'],
  title: 'Component/Atoms/Notification Content Header Component',
  component: NotificationContentHeaderComponent,
}
export default meta
type story = StoryObj<typeof NotificationContentHeaderComponent>
export const DefaultNotificationContentHeaderComponent: story = {}
