import { createContext } from "react";
export const AuthContext = createContext();
function AuthContextProvider(props) {
const values = {
  
}
  return (
    <AuthContext.Provider value={ values }>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;