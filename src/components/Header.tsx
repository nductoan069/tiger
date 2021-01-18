import React from "react";
import {
  Text,
  View,
} from 'react-native';
import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <View>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/about">
        <Text>About</Text>
      </Link>
      <Link to="/topics">
        <Text>Topics</Text>
      </Link>
    </View>
  );
}

export default Header;
