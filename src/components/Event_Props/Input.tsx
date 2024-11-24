type InputProp = {
    value: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function Input(props: InputProp) {
    return (
        <input type="text" value={props.value} className="bg-red-200 p-3" onChange={props.handleChange}/>
    )
}
export default Input