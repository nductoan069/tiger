import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import * as Counter from '../modules/counter'

import Topics from "../components/pages/Topics";

const CounterComponent = () => {
    const current = useSelector<{value:number},number>(state => state.value)
    const dispatch = useDispatch();
    function incrementer() {
        dispatch(Counter.increment());
    }
    function decrement() {
        dispatch(Counter.decrement());
    }

    return <Topics current={current} increment={incrementer} decrement={decrement}/>
  }

export default CounterComponent;
