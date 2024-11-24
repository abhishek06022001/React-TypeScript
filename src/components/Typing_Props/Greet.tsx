type GreetProps = {
    name?: string,
    count?: number
}
function Greet({ name = 'Abhishek', count = 9 }: GreetProps) {
    return (
        <div>
            Welcome {name} you have {count} unread messages
        </div>
    )
}
export default Greet