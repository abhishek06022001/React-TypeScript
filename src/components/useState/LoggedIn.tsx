import { useState } from "react";
function LoggedIn() {
    const [isLoggedIn, setIsLoggedOut] = useState(false);
    const handleLogin = () => {
        setIsLoggedOut(true)
    };
    const handleLogout = () => {
        setIsLoggedOut(false)
    };
    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is  {isLoggedIn ? "Logged In" : "Logged Out"}</div>
        </div>
    )
}
export default LoggedIn