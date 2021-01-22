import { State as CounterState } from './counter'
import { State as  NameState } from './name'

export type StoreState = {counter:CounterState, name:NameState}
