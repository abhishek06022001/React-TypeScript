export type profilePrope = {
    name: string
}
function Profile({ name }: profilePrope) {
    return (
        <div>Name is {name}</div>
    )
}
export default Profile