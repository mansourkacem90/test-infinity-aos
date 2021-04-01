import { createContext, useContext } from "react";

declare interface UserContextProps {
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  isAuthenticated: string;
  message:string;
}
export const UserContext = createContext<UserContextProps>({
  logIn: (email, password) => undefined,
  logOut: () => undefined,
  isAuthenticated: "",
  message:''
});
export const useUserContext = () => useContext(UserContext);
