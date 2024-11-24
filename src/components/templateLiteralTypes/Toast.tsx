type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'left' | 'center' | 'right';
type PositionProp = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}
const Toast = ({ position }: PositionProp) => {
    return (
        <div>Toast notification position - {position}</div>
    )
}
export default Toast