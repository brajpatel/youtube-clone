import { useState } from "react";

const AuthContext = React.createContext();

function AuthContextProvider(props) {
    const [online, setOnline] = useState(false);
    const [userInfo, setUserInfo] = useState(undefined);

    return (
        <AuthContext.Provider>
            {props.chidlren}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };