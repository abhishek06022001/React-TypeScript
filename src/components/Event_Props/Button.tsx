type ButtonProps = {
    handleClick: (event: React.MouseEvent, id: number) => void
}
function Button(props: ButtonProps) {
    return (
        <div onClick={event => props.handleClick(event, 1)}>Click me</div>
    )
}
export default Button
/**
 * when some one clicks it should be handled 
 * so handleClick ek prop banaya hai and that prop is taking some function 
 * now that function is in type alias inside ButtonProps 
 * now what happens is when u have onClick u have defined handleClick to that , why ??? bcuz the function u have for handleClick gets passed in there 
 */