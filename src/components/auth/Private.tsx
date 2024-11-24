import Login from "./Login"
import { profilePrope } from "./Profile"
type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<profilePrope>
}
function Private({ isLoggedIn, component: Component }: PrivateProps) {
    if (isLoggedIn) {
        return <div><Component name='vishvas' /></div>

    } else {
        return <div><Login /></div>
    }
}
export default Private