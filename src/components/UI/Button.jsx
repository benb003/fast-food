const Button = ({children, textOnly, className, ...props}) => {
  return (
    <button className={className} {...props}>{children}</button>
  )
}
export default Button