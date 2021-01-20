// Actions
const COUNTER_INCREMENT = 'tiger/counter/increment' as const;
const COUNTER_DECREMENT = 'tiger/counter/decrement' as const;

// Action Creators
export function increment() {
  return {
    type: COUNTER_INCREMENT
  };
}

export function decrement() {
  return {
    type: COUNTER_DECREMENT
  };
}

type Action = ReturnType<typeof increment> | ReturnType<typeof decrement>

// Reducer
export default function counterReducer(state = { value: 0 }, action: Action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { value: state.value + 1 };
    case COUNTER_DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

