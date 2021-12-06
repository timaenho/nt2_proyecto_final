import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions ,Platform} from 'react-native';
import { useState, useEffect,useContext,useRef } from 'react';
import {permission,location} from 'expo';
import GlobalContext,{authData} from "../components/context"
import { useSelector,useDispatch } from 'react-redux';
import io from "socket.io-client"
import {Constant} from '../service/constantes'




//https://github.com/react-native-maps/react-native-maps



/*   const markers = [
    {
      coordinates: {
        latitude: -34.524548,
        longitude: -58.5749817,
      },
      title: "Tom Maenhout",
      description: "Holandés" 
      
    },
    {
      coordinates: {
        latitude: 45.524698,
        longitude: -122.6655507,
      },
      title: "Cédric Delafountaine",
      description: "Francés"
    },
    {
      coordinates: {
        latitude: 45.5230786,
        longitude: -122.6701034,
      },
      title: "Patrick Robinson",
      description: "Inglés"
    },
    {
      coordinates: {
        latitude: 45.521016,
        longitude: -122.6561917,
      },
      title: "Mauro Pavesi",
      description: "Español"
    },
  ]
 */

export default function Mapa({navigation}) {
    const {AuthData,setAuthData} = useContext(GlobalContext)

    let markers2 = useSelector(state => state.usersOnline)
     if(markers2 == undefined){
       markers2 =  [{
        coordinates: {
          latitude: 45.521016,
          longitude: -122.6561917
        },
        username: "Mauro Pavesi",
        idiomaAaprender: "Español"
      }]
    } 

    const [username, setUsername] = useState(AuthData.username)
    const [avatar, setAvatar] = useState(AuthData.imagen)
    const [locationLatitude, setLocationLatitude] = useState(AuthData.coordinates.latitude)
    const [locationLongitude, setLocationLongitude] = useState(AuthData.coordinates.longitude)
    const [idiomaAaprender, setIdiomaAaprender] = useState(AuthData.idiomaAaprender)
    const socket = useRef(null)
    const dispatch = useDispatch();
   
    console.log("usersOnline " + markers2)
    
      
   
    const PerfilExt = (markers2) => {

      console.log("dentro la función de perfil")
      console.log("latitude " + AuthData.coordinates.latitude)
      console.log("longitude " + AuthData.coordinates.longitude)
      navigation.navigate("PerfilExt", markers2)
    }
    useEffect(() => {
 
      socket.current = io(Constant.NGR_KEY);
      socket.current.emit("join",username,avatar)
    
      dispatch({type:"server/join",data:{
        username: username, 
        avatar:avatar, 
        coordinates: {
          latitude: locationLatitude, 
          longitude: locationLongitude, 
        },
        idiomaAaprender:idiomaAaprender}})
    }, [])
   

    return (
     
      <MapView
      style={styles.container}>
      
      {markers2.map((markers2, index) => (
        <MapView.Marker key={index}
          coordinate= {markers2.coordinates}
          title={markers2.username}
          description={markers2.descripcion}
          onCalloutPress={() => PerfilExt(markers2)}
        />
      ))}
    </MapView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });