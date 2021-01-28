import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import liff from '@line/liff';

liff.init({ liffId: '1655616771-0P26KVbm' });
async function login() {
    if (!liff.isLoggedIn()) {
        liff.login();
    }
    const profile = await liff.getProfile();
    console.log(profile);
}
setTimeout(login, 1000);


ReactDOM.render(<App />, document.getElementById("root"));
