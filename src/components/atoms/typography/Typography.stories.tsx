import { Meta, StoryObj } from '@storybook/react'
import { Typography } from '.'

const meta: Meta<typeof Typography> = {
  tags: ['autodocs'],
  title: 'Component/Atoms/Typography',
  component: Typography,
}
export default meta
type story = StoryObj<typeof Typography>
export const DefaultTypography: story = {}
export const BoldTypography: story = {
  decorators: [
    (Story) => (
      <div className='font-bold font-'>
        <Story />
      </div>
    ),
  ],
}
export const MediumTypography: story = {
  decorators: [
    (Story) => (
      <div className='font-medium'>
        <Story />
      </div>
    ),
  ],
}

export const NormalTypography: story = {
  decorators: [
    (Story) => (
      <div className='font-normal'>
        <Story />
      </div>
    ),
  ],
}

export const LightTypography: story = {
  decorators: [
    (Story) => (
      <div className='font-light'>
        <Story />
      </div>
    ),
  ],
}
