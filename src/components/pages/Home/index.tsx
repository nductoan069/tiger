import React, { FC } from "react";
import {
  FlatList,
  View,
} from "react-native";

import Item from "./listItem";
import newsItems from "./data";
import Label from '../../atoms/Label';

const Home: FC = () => {
  return(
    <View>
      <Label>New Gears</Label>
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
