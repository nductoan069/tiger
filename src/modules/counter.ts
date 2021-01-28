// initial state
export function createInitialState() {
  return {
    value: 0,
  }
}

export type State = ReturnType<typeof createInitialState>

// Action Types
export const COUNTER_INCREMENT = 'tiger/counter/increment' as const;
export const COUNTER_DECREMENT = 'tiger/counter/decrement' as const;

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

// Actions
export type Action = ReturnType<typeof increment> | ReturnType<typeof decrement>

// Reducer
export default function reducer(state = createInitialState(), action: Action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { value: state.value + 1 };
    case COUNTER_DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

