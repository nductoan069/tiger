import React from "react";
import {
  SafeAreaView,
} from "react-native";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './Header'
import Routes from './Routes'

import { createStore } from 'redux'

interface Action{
  type:string;
}

function counterReducer(state = { value: 0 }, action:Action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}
let store = createStore(counterReducer);
debugger
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'counter/incremented' });

store.dispatch({ type: 'counter/incremented' });

store.dispatch({ type: 'counter/decremented' });

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
