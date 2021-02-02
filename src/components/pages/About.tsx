import React, { FC, useState  } from "react";
import {
    Text, TouchableOpacity, TextInput
  } from "react-native";
import liff from '@line/liff';

interface Props{
  name:string;
  setName:(name:string)=> void;
}
async function sendMessages() {
  try {
    await liff.sendMessages([
      {
        type: 'text',
        text: 'Hello, World!'
      }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

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
        <TouchableOpacity
        onPress={sendMessages} 
        >
        <Text>Send Message</Text>
        </TouchableOpacity>
      </>
    );
};

export default About;