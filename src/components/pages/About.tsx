import React, { FC } from "react";
import {
    Text, View, TouchableOpacity
  } from "react-native";

interface Props{
  name:string;
  setName:(name:string)=> void;
}

  const About: FC<Props> = (props) => {
    return(
      <>
        <Text>{props.name}</Text>
        <TouchableOpacity
        onPress={()=>{props.setName("test")}} 
        >
        <Text>Press Here</Text>
        </TouchableOpacity>
      </>
    );
};

export default About;