import { IconProps } from './type'

const Sun = ({
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
      <circle cx='12' cy='12' r='5' />
      <path d='M12 1v2' />
      <path d='M12 21v2' />
      <path d='M4.22 4.22l1.42 1.42' />
      <path d='M18.36 18.36l1.42 1.42' />
      <path d='M1 12h2' />
      <path d='M21 12h2' />
      <path d='M4.22 19.78l1.42-1.42' />
      <path d='M18.36 5.64l1.42-1.42' />
    </svg>
  )
}

export default Sun
