type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

const Button = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button className={`class-${variant}`} {...rest}
        >{children}</button>
    )
}
export default Button;