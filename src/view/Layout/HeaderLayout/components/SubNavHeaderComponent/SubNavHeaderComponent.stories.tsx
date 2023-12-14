import { Meta, StoryObj } from '@storybook/react'
import { SubNavHeaderComponent } from '.'

const meta: Meta<typeof SubNavHeaderComponent> = {
  tags: ['autodocs'],
  title: 'Component/Molecules/Sub Navigation Header Component',
  component: SubNavHeaderComponent,
}
export default meta
type story = StoryObj<typeof SubNavHeaderComponent>

export const DefaultSubNavHeaderComponent: story = {}
