import * as Location from 'expo-location';
import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions ,Platform} from 'react-native';
import { useState, useEffect,useContext } from 'react';
import {permission,location} from 'expo';
import GlobalContext, { authData } from '../components/context'
import { useSelector } from 'react-redux';



//https://github.com/react-native-maps/react-native-maps



  const markers = [
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
  const Localizacion = () =>{
    const {AuthData,setAuthData} = useContext(GlobalContext)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        console.log(location)
        setLocation(location);
      })();
    }, []);
  

    useEffect(() => {
      let valor = 'waiting...';
      let reporte = null;
  
      if (errorMsg) {
        valor = errorMsg;
      }
      else if (location) {
        valor = JSON.stringify(location);
        reporte = JSON.parse(valor);
        setAuthData({...AuthData,
          locationLatitude: reporte.coords.latitude,
          locationLongitude: reporte.coords.longitude
      })
      }

    }, [location]);
}

export default function Mapa({navigation}) {
    const {AuthData,setAuthData} = useContext(GlobalContext)
    const markers2 = useSelector(state => state.usersOnline)
    console.log("usersOnline " + markers2)
    
      
    Localizacion();
    const PerfilExt = () => {
      console.log("dentro la función de perfil")
      console.log("latitude " + AuthData.locationLatitude)
      console.log("longitude " + AuthData.locationLongitude)
      navigation.navigate("PerfilExt")
    }

   

    return (
     
      <MapView
      style={styles.container}>
      {markers.map((markers, index) => (
        <MapView.Marker key={index}
          coordinate={markers.coordinates}
          title={markers.title}
          description={markers.description}
          onCalloutPress={PerfilExt}
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