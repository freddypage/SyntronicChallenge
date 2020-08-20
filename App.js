import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {Request} from 'request';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hi nickyy!</Text>
      <Movie title="barf"/>
      <StatusBar style="auto" />
    </View>
  );
}

function Movie(props) {
  return (
      <Text>{props.title}</Text>
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
