import { IconProps } from './type'

const Plus = ({
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
      {...rest}
    >
      <path
        d='M12 5V19'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 12H19'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Plus
