import React, {useState} from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import DashBoard from './src/components/organisms/Dashboard';


const initialState = {
  counter:0
}

const reducer = (state = initialState) => {
  return state
}

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <DashBoard/>
    </Provider>
  );
}

