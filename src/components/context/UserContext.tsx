import { useState, createContext } from "react"
export type AuthUser = {
    name: string,
    email: string
}
type userContextProviderProp = {
    children: React.ReactNode
}
type UserTypeContext = {
    user: null | AuthUser,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const UserContext = createContext({} as UserTypeContext);
export const UserContextProvider = ({ children }: userContextProviderProp) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return <UserContext.Provider
        value={{ user, setUser }}
    > {children}</UserContext.Provider >
}
