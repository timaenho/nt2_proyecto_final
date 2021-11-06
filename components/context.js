import React from "react";

const authData = {
    username: 'Tom',
    email:'@email.com'
}


export {authData}


export default React.createContext(authData)


