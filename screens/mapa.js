import * as Location from 'expo-location';
import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions ,Platform} from 'react-native';
import { useState, useEffect,useContext } from 'react';
import {permission,location} from 'expo';
import GlobalContext, { authData } from '../components/context'


  const markers = [
    {
      coordinates: {
        latitude: 45.524548,
        longitude: -122.6749817,
      },
      title: "Best Place",
      description: "This is the best place in Portland" 
      
    },
    {
      coordinates: {
        latitude: 45.524698,
        longitude: -122.6655507,
      },
      title: "Second Best Place",
      description: "This is the second best place in Portland"
    },
    {
      coordinates: {
        latitude: 45.5230786,
        longitude: -122.6701034,
      },
      title: "Third Best Place",
      description: "This is the third best place in Portland"
    },
    {
      coordinates: {
        latitude: 45.521016,
        longitude: -122.6561917,
      },
      title: "Fourth Best Place",
      description: "This is the fourth best place in Portland"
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
        setAuthData({...authData,
        location: valor
      })
      }

    }, [location]);
}

export default function Mapa({navigation}) {
    const {AuthData,setAuthData} = useContext(GlobalContext)
    Localizacion();
    const PerfilExt = () => {
      console.log("dentro la función de perfil")
      navigation.navigate("PerfilExt")
    }

    console.log(AuthData)

    return (
      <MapView
      style={styles.container}
    >
    
      {markers.map((marker, index) => (
        <MapView.Marker key={index}
          coordinate={marker.coordinates}
          title={marker.title}
          description={marker.description}
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