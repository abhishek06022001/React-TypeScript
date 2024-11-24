import { useState } from "react"
type AuthUser = {
    name: string,
    email: string
}
function User_Type_Assertion() {
    // lying to the compiler that this is type asserted dude !
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name: 'Abhishek',
            email: 'satheabhishek1@gmail.com'
        })
    };
    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <div>User's name is  {user?.email}</div>
        </div>
    )
}
export default User_Type_Assertion