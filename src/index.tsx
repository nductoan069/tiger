import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import liff from '@line/liff';
import VConsole from 'vconsole';
// @ts-ignore: Unreachable code error
const vConsole = new VConsole (); 

async function init() {
  try {
    await liff.init({ liffId: '1655616771-0P26KVbm' })
    await login();
  }
  catch(error) {
    console.error(`failed: ${error.message}`)
  }
}

async function login() {
    if (!liff.isLoggedIn()) {
        liff.login();
    }

    const profile = await liff.getProfile();
    console.log(profile);

    ReactDOM.render(<App />, document.getElementById("root"));
}

init();



