import React from "react";
import {
  SafeAreaView,
} from "react-native";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './Header'
import Routes from './Routes'

function App() {
  return (
    <SafeAreaView>
      <Router>
        <Header />
        <Routes />
      </Router>
    </SafeAreaView>
  );
};

export default App;
