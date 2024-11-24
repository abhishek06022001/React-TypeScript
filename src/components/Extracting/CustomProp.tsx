import Greet from "../Typing_Props/Greet"

export const CustomProp = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>name is  {props.name}</div>
    )
}