import { IconProps } from './type'

const System = ({
  size = '24',
  focusable = false,
  role = 'presentation',
  ...rest
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    role={role}
    aria-hidden={true}
    focusable={focusable}
    fill='none'
    shapeRendering='geometricPrecision'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='1.5'
    {...rest}
  >
    <path d='M2 13.381h20M8.66 19.05V22m6.84-2.95V22m-8.955 0h10.932M4 19.05h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13.05a2 2 0 002 2z'></path>
  </svg>
)

export default System
