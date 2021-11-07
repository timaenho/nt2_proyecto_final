/* import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';


/* export default function Mapa() {
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

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
 
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
} */

/* export default function Mapa() {
    <MapView/>
}
 */

  import * as React from 'react';
  import MapView from 'react-native-maps';
  import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

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
  
  
  export default function Mapa({navigation}) {
    const perfil = () => {
      console.log("dentro la función de perfil")
      navigation.navigate("Perfil")
    }
    return (
      <MapView
     style={styles.container}
    >
    
      {markers.map((marker, index) => (
        <TouchableOpacity onPress={perfil}>
        <MapView.Marker key={index}
          coordinate={marker.coordinates}
          title={marker.title}
        />
        </TouchableOpacity>
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

