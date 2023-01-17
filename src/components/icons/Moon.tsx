import { IconProps } from './type'

const Moon = ({
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
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...rest}
    >
      <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' />
    </svg>
  )
}

export default Moon
