import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useUserAuth = () => {
  const [isAuthenticated, setAuthentication] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const [ message,setMessage ] =useState('')
  const logIn = (email: string, password: string) => {
    if (email === "test@test.com" && password === "test"){
      setAuthentication(uuidv4());
      localStorage.setItem("token", uuidv4());
      setMessage(``);
    }
    else setMessage(`Ce compte n'existe pas`)
  };
  const logOut = () => {
    setAuthentication("");
    localStorage.setItem("token", "");
  };
  return {
    logIn,
    logOut,
    isAuthenticated,
    message
  };
};
