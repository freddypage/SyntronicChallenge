import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {Request} from 'request';
import MovieGallery from 'organisms/MovieGallery';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"sans-serif-medium", fontSize:30}}>wassup sibs</Text>
      <MovieGallery />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
