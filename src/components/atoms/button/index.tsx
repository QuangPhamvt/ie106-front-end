import React from 'react'
import classNames from 'classnames'
export interface ButtonProps extends React.ComponentProps<'button'> {
  width: string
  height: string
  padding_x: string
  padding_y: string
  variant: 'text' | 'contained' | 'outlined'
  rounded: 'md' | 'lg' | 'xl' | '2xl'
}
const outlinedVariant = `border-[1px] border-solid font-medium border-[#4848A4] bg-white text-[#4848A4]`
const containedVariant = `bg-[#4848A4] text-white font-medium`
export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const { width = '240px', height = '40px', padding_x, padding_y, variant, rounded = 'md', children, onClick } = props

  return (
    <button
      onClick={onClick}
      style={{
        width,
        height,
        paddingLeft: padding_x,
        paddingRight: padding_x,
        paddingTop: padding_y,
        paddingBottom: padding_y,
      }}
      className={classNames(
        {
          [`${outlinedVariant}`]: variant === 'outlined',
          [`${containedVariant}`]: variant === 'contained',
        },
        {
          [`rounded-md`]: rounded === 'md',
          [`rounded-lg`]: rounded === 'lg',
          [`rounded-xl`]: rounded === 'xl',
          [`rounded-2xl`]: rounded === '2xl',
        },
      )}
    >
      {children || 'Button'}
    </button>
  )
}
