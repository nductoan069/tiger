import React from "react";
import {
  SafeAreaView,
} from "react-native";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './Header'
import Routes from './Routes'

import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Router>
          <Header />
          <Routes />
        </Router>
      </SafeAreaView>
    </Provider>
    
  );
};

export default App;
