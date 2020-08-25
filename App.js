import React, {useState} from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import DashBoard from './src/components/organisms/Dashboard';
import {Font, AppLoading} from 'expo';
import {useFonts} from 'expo-font';


const initialState = {
  counter:0
}

const reducer = (state = initialState) => {
  return state
}

const store = createStore(reducer);

export default function App() {
  const [loaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-BoldItalic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
  });


  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <DashBoard/>
    </Provider>
  );
}

