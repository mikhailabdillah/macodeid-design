import { IconProps } from './type'

const Check = ({
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
        d='M20 6L9 17L4 12'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Check
