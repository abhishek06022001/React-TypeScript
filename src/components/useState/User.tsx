import { useState } from "react"
type AuthUser = {
    name: string,
    email: string
}
// initially the user type is null and later it can be AuthUser 
function User() {
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name: 'Abhishek',
            email: 'satheabhishek1@gmail.com'
        })
    };
    const handleLogout = () => {
        setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User's name is  {user?.email}</div>
            <div>User's email is  {user?.name}</div>
        </div>
    )
}
export default User