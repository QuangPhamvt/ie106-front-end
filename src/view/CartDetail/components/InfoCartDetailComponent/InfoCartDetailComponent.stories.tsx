import { Meta, StoryObj } from '@storybook/react'
import { InfoCartDetailComponent } from '.'

const meta: Meta<typeof InfoCartDetailComponent> = {
  tags: ['autodocs'],
  title: 'Component/Molecules/InfoCartDetailComponent',
  component: InfoCartDetailComponent,
}
export default meta
type story = StoryObj<typeof InfoCartDetailComponent>
export const DefaultInfoCartDetailComponent: story = {}
