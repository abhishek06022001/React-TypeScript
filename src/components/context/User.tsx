import { useContext } from "react";
import { UserContext } from "./UserContext";
function User() {
    const userInfo = useContext(UserContext);
    const handleLogin = () => {
        userInfo.setUser({ name: "Abhiske", email: "idk.com" })
    };
    const handleLogout = () => {
        userInfo.setUser(null)
    };
    return (
        <div>
            <button
                onClick={handleLogin}
            >Login</button>
            <button
                onClick={handleLogout}
            >Logout</button>
            <div>User name is {userInfo.user?.name} </div>
            <div>User email is  {userInfo.user?.email} </div>
        </div>
    )
}
export default User