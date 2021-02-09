import React, { FC, useState  } from "react";
import {
    Text, TouchableOpacity, TextInput
  } from "react-native";
import liff from '@line/liff';

import FlexMessage from "./FlexMessage.json";

interface Props{
  name:string;
  setName:(name:string)=> void;
}
async function sendTextMessages() {
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

async function sendStickerMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "sticker",
        // @ts-ignore: Unreachable code error
        "packageId": "11537",
        "stickerId": "52002734"
      }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendImageMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "image",
        // @ts-ignore: Unreachable code error
        "originalContentUrl": "https://static.vecteezy.com/system/resources/previews/000/239/085/original/modern-colorful-geometric-line-background-vector.jpg",
        "previewImageUrl": "data:image/jpeg;base64,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"
      }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendVideoMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "video",
        // @ts-ignore: Unreachable code error
        "originalContentUrl": "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        "previewImageUrl": "https://example.com/preview.jpg",
        "trackingId": "track_id"
    }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendAudioMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "audio",
        // @ts-ignore: Unreachable code error
        "originalContentUrl": "https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3",
        "duration": 60000
    }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendLocationMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "location",
        // @ts-ignore: Unreachable code error
        "title": "my location",
        "address": "〒160-0022 東京都新宿区新宿４丁目１−６", 
        "latitude": 35.688806,
        "longitude": 139.701739  
    }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendImagemapMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "imagemap",
        // @ts-ignore: Unreachable code error
        "baseUrl": "https://static.vecteezy.com/system/resources/previews/000/239/085/original/modern-colorful-geometric-line-background-vector.jpg",
        "altText": "This is an imagemap",
        "baseSize": {
            "width": 1040,
            "height": 1040
        },
        "video": {
            "originalContentUrl": "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
            "previewImageUrl": "https://example.com/video_preview.jpg",
            "area": {
                "x": 0,
                "y": 0,
                "width": 1040,
                "height": 585
            },
            "externalLink": {
                "linkUri": "https://google.com",
                "label": "See More"
            }
        },
        "actions": [
            {
                "type": "uri",
                "linkUri": "https://example.com/",
                "area": {
                    "x": 0,
                    "y": 586,
                    "width": 520,
                    "height": 454
                }
            },
            {
                "type": "message",
                "text": "Hello",
                "area": {
                    "x": 520,
                    "y": 586,
                    "width": 520,
                    "height": 454
                }
            }
        ]
      }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendButtonTemplateMessages() {
  try {
    await liff.sendMessages([
      {
          "type": "template",
          // @ts-ignore: Unreachable code error
          "altText": "This is a buttons template",
          "template": {
              "type": "buttons",
              "thumbnailImageUrl": "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
              "imageAspectRatio": "rectangle",
              "imageSize": "cover",
              "imageBackgroundColor": "#FFFFFF",
              "title": "Menu",
              "text": "Please select",
              "defaultAction": {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://youtube.com"
              },
              "actions": [
                  {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://google.com"
                  }
              ]
          }
        }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendConfirmTemplateMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "template",
                  // @ts-ignore: Unreachable code error
        "altText": "this is a confirm template",
        "template": {
            "type": "confirm",
            "text": "Are you sure?",
            "actions": [
                {
                  "type": "uri",
                  "label": "Google",
                  "uri": "http://google.com"
                },
                {
                  "type": "uri",
                  "label": "Youtube",
                  "uri": "http://Youtube.com"
                }
            ]
        }
      }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendCarouselTemplateMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "template",
        // @ts-ignore: Unreachable code error
        "altText": "this is a carousel template",
        "template": {
            "type": "carousel",
            "columns": [
                {
                  "thumbnailImageUrl": "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
                  "imageBackgroundColor": "#FFFFFF",
                  "title": "this is menu",
                  "text": "description",
                  "defaultAction": {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "http://example.com/page/123"
                  },
                  "actions": [
                      {
                          "type": "uri",
                          "label": "View detail",
                          "uri": "http://example.com/page/111"
                      }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
                  "imageBackgroundColor": "#000000",
                  "title": "this is menu",
                  "text": "description",
                  "defaultAction": {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "http://example.com/page/222"
                  },
                  "actions": [
                      {
                          "type": "uri",
                          "label": "View detail",
                          "uri": "http://example.com/page/222"
                      }
                  ]
                }
            ],
            "imageAspectRatio": "rectangle",
            "imageSize": "cover"
        }
      }
    ])
    console.log('message sent');
  } catch(err) {
      console.log('error', err);
    }
};

async function sendFlexMessages() {
  try {
    await liff.sendMessages([
      {
        "type": "flex",
        // @ts-ignore: Unreachable code error
        "altText": "this is a flex message",
        "contents": FlexMessage
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
        onPress={sendTextMessages} 
        >
        <Text>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendStickerMessages} 
        >
        <Text>Send Sticker Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendImageMessages} 
        >
        <Text>Send Image Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendVideoMessages} 
        >
        <Text>Send Video Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendAudioMessages} 
        >
        <Text>Send Audio Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendLocationMessages} 
        >
        <Text>Send Location Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendImagemapMessages} 
        >
        <Text>TODO Send Imagemap Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendButtonTemplateMessages} 
        >
        <Text>Send Button Template Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendConfirmTemplateMessages} 
        >
        <Text>Send Confirm Template Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendCarouselTemplateMessages} 
        >
        <Text>Send Carousel Template Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={sendFlexMessages} 
        >
        <Text>Send Flex Messages</Text>
        </TouchableOpacity>
      </>
    );
};

export default About;