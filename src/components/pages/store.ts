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

export default createStore(counterReducer);