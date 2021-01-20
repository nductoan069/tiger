import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

import Topics from "../components/pages/Topics";

const CounterComponent = () => {
    const current = useSelector<{value:number},number>(state => state.value)
    const dispatch = useDispatch();
    function incrementer() {
        dispatch({ type: 'counter/incremented' });
    }
    function decrement() {
        dispatch({ type: 'counter/decremented' });
    }

    return <Topics current={current} increment={incrementer} decrement={decrement}/>
  }

export default CounterComponent;