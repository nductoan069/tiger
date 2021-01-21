import 'react-redux'

import { StoreState } from '../modules'

declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
}
