// initial state
export function createInitialState() {
    return {
      name: '',
    }
  }

  export type State = ReturnType<typeof createInitialState>

  // Action Types
  const SET_NAME = 'tiger/name/set' as const;

  // Action Creators
export function setName(name:string) {
    return {
      type: SET_NAME,
      payload: {
        name, 
      }
    };
}

// Actions
type Action = ReturnType<typeof setName>

// Reducer
export default function reducer(state = createInitialState(), action: Action) {
    switch (action.type) {
      case SET_NAME:
        return { name: action.payload.name };
      default:
        return state;
    }
  }