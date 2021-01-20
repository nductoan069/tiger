import React, { } from "react";
import {
    Text, View,
  } from "react-native";
interface Props{
  current:number;
  increment:()=>void;
  decrement:()=>void;
}

function Topics(props: Props) {
  return(
    <View>
      <Text>{props.current}</Text>
      <Text onPress={props.increment}>Increment</Text>
      <Text onPress={props.decrement}>Decrement</Text>
    </View>
  );
};

export default Topics;