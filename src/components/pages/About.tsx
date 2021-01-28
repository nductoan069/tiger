import React, { FC, useState  } from "react";
import {
    Text, TouchableOpacity, TextInput
  } from "react-native";

interface Props{
  name:string;
  setName:(name:string)=> void;
}

  const About: FC<Props> = (props) => {
    const [name, setName] = useState("");

    return(
      <>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text:string) => setName(text)}
          value={name}
        />
        
        <Text>{props.name}</Text>
        <TouchableOpacity
        onPress={()=>{props.setName(name)}} 
        >
        <Text>Press Here</Text>
        </TouchableOpacity>
      </>
    );
};

export default About;