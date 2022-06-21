type ButtonProps = {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
}
