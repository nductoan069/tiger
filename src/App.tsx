import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

import Item from "./listItem";
import newsItems from "./data";

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: 'center',
  },
});

function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>New Gears</Text>
      <FlatList
        data={newsItems}
        renderItem={({item}) => (
          <Item
            id={item.id}
            uri={item.uri}
            title={item.title}
            category={item.category}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
