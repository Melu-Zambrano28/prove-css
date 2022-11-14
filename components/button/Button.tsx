import style from './Button.module.css'

type __ButtonProps = {
  btnType: 'primary' | 'secondary' | 'tertiary'
  ghost?: boolean
}

type ButtonProps = React.PropsWithChildren<
  __ButtonProps & {
    onClick: (u: unknown) => void
  }
>
const Button: React.FC<ButtonProps> = ({
  btnType,
  ghost,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${style.btn} ${style[btnType]} ${ghost ? style.ghost : ''}`}
    >
      {children}
    </button>
  )
}

export { Button }
