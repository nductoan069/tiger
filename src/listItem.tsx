import React, {FC} from "react";
import {NewsType} from "./data";
import { View, Text, Image} from "react-native";

const Item: FC<NewsType> = (props) => {
    return(
        <View>
            {/* <Image
        style={{height:10}}
        resizeMode="contain"
        source={{
            uri:{{props.uri}}
        }}
      /> */}
            <View>
                <Text>{props.title}</Text>
            </View>
            <View>
                <Text>{props.category}</Text>
            </View>
        </View>
    );
};

export default Item;
