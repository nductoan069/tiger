import React, {FC} from "react";
import {NewsType} from "./data";
import { View, Text, Image} from "react-native";

const Item: FC<NewsType> = (props) => {
    return(
        <View style={{flexDirection: "row", alignContent: "center", alignItems:"center"}} >
            <View>
            <Image
                style={{backgroundColor: "blue", height:50, width:50}}
                resizeMode="contain"
                source={{       
                uri: props.uri,
                }}
            />
            </View>
            <View>
                <View>
                    <Text style={{fontSize: 25, fontWeight: "bold",flex:1}}>{props.title}</Text>
                </View>
                <View>
                    <Text style={{flex:1}}>{props.category}</Text>
                </View>
            </View>
        </View>
    );
};

export default Item;
