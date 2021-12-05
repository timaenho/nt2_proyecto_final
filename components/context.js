import React from "react";
import avatar from "../images/hombre-gorra-camara-1.jpg"

const authData = {
    username: "",
    email:'',
    idiomaAaprender: ' ',
    idiomaNativo: ' ',
    imagen: undefined,
    coordinates: {
        latitude: Number,
        longitude: Number},
    esOnline:false
}




export {authData}


export default React.createContext(authData)


