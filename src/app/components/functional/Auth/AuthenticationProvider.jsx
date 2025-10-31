import PropTypes from "prop-types";
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log("User:", user);
    
    return(<AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>)
}

AuthenticationProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthenticationProvider;