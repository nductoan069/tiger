import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
  // etc.
} from "react-router-dom";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// import Item from "./listItem";
// import newsItems from "./data";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Topics from "./components/pages/Topics";
import NoMatch from "./components/pages/NoMatch";

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//     textAlign: 'center',
//   },
// });

function App() {
  return (
    <SafeAreaView>
      <Router>
        <View>
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route component={NoMatch} />
          </Switch>

        </View>
      </Router>
      {/* <Text style={styles.title}>New Gears</Text>
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
      /> */}
    </SafeAreaView>
  );
};

export default App;
