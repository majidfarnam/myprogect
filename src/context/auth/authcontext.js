import React, {useState} from 'react';

export const AuthContext = React.createContext();

const AuthContextProvider =(props)=>{
    const [authentication,setAuthentication ] = useState(false);

    const LoginContext=()=>{
        setAuthentication(true);
    }
    return(
        <AuthContext.Provider value={{LoginContext,authentication}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;