import { IconProps } from './type'

const Menu = ({
  size = '24',
  focusable = false,
  role = 'presentation',
  ...rest
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role={role}
      aria-hidden={true}
      focusable={focusable}
      fill='none'
      stroke='currentColor'
      {...rest}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16m-7 6h7'
      />
    </svg>
  )
}

export default Menu
