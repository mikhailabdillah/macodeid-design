import { IconProps } from './type'

const ArrowRight = ({
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
        d='M5 12H19'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 5L19 12L12 19'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ArrowRight
