import classNames from 'classnames'
interface ButtonProps extends React.ComponentProps<'button'> {
  name: 'Success' | 'Cancel' | 'Click'
  backGroundColor: string
  status: 'disable' | 'active'
}
export const Button = ({ className, backGroundColor, name, status = 'active' }: ButtonProps) => {
  const backGround = `bg-[${backGroundColor}]`
  return (
    <button>
      <div
        className={classNames(
          `p-[10px_20px] rounded-lg border-solid border-2`,
          {
            [`font-bold`]: true,
            [`${backGround} hover:bg-[#00CBFE] active:bg-[#00BDFE]`]: status === 'active',
            [`bg-[#D8F2FF]`]: status === 'disable',
          },
          className,
        )}
      >
        {name}
      </div>
    </button>
  )
}
