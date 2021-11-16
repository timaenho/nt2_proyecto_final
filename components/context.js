import React from "react";
import avatar from "../images/hombre-gorra-camara-1.jpg"

const authData = {
    username: 'Tom Maenhout',
    email:' ',
    idomaAaprender: ' ',
    idiomaNativo: ' ',
    imagen: avatar,
    location:{}
}




export {authData}


export default React.createContext(authData)


