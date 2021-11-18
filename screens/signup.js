import React, {} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Signup = ({navigation}) => {
        return (
            <View style= {styles.container}>
                <StatusBar/>
                <Text>Signup</Text>
            </View>
        )

}
const styles = StyleSheet.create({
    container: {
      padding:50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Signup;