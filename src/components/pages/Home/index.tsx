import React, { FC } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
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

const Home: FC = () => {
  return(
    <View>
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
    </View>
  );
};

export default Home;
