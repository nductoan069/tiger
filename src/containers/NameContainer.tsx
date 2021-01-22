import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import * as Name from '../modules/name'

import About from "../components/pages/About";

const NameComponent = () => {
    const name = useSelector(state => state.name.name)
    const dispatch = useDispatch();

    function setName(name:string) {
        dispatch(Name.setName(name));
    }

    return <About
      name={name}
      setName={setName}
      // actions={{
      //   setName,
      // }}
    />
  }

export default NameComponent;
