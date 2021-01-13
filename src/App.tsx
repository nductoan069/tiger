import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import Item from "./listItem";
import {NewsItem} from "./data";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    padding: 20
  },

  image: {
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
    <View>
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{       
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={[styles.description, {flex:2}]}>
        <Text style={[styles.titletext, {flex:2}]}>Hello World!</Text>
        <Text style={[styles.category, {flex:1}]}>Hello World!</Text>
      </View>
    
      
    </View>
    <SafeAreaView>
    <FlatList
        data={NewsItem}
        renderItem={({item})=>(
          <Item id={item.id} uri={item.uri} title={item.title} category={item.category} />
        )}
      />
        </SafeAreaView>

    </View>
  );
};

export default App;