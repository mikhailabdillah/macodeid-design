import { IconProps } from './type'

const Cross = ({
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
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  )
}

export default Cross
