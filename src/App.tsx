import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    padding: 20
  },

  image: {
    width: 50, 
    height: 100, 
    backgroundColor: "blue", 
    flex: 1
  },
  description: {
    backgroundColor: "red", 
  },
  titletext: {
    fontSize: 20, fontWeight: "bold", backgroundColor: "red", 
  },
  category: {
    backgroundColor: "red", 
  },
});

function App() {
  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{       
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={[styles.description, {flex:2}]}>
        <Text style={[styles.titletext, {flex:2}]}>Hello World!</Text>
        <Text style={[styles.category, {flex:10}]}>Hello World!</Text>
      </View>
      
    </View>
  );
};

export default App;