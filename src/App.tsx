import React from "react";
import {
  SafeAreaView,
} from "react-native";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './components/Header'
import Routes from './components/Routes'

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
