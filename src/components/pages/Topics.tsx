import React from "react";
import {
  Text,
  View,
} from "react-native";

interface Props {
  current: number;
  actions: {
    increment: () => void;
    decrement: () => void;
  }
}

function Topics(props: Props) {
  return(
    <View>
      <Text>{props.current}</Text>
      <Text onPress={props.actions.increment}>Increment</Text>
      <Text onPress={props.actions.decrement}>Decrement</Text>
    </View>
  );
}

export default Topics;
