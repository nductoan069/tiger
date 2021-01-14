import React, { FC } from "react";
import {
    Text,
  } from "react-native";
interface Route{
    location: {pathname: string};
}
// function NoMatch( route: { location: {pathname: string }} ) {
//     return <Text>No match for {route.location.pathname}</Text>;
// }
const NoMatch: FC<Route> = (route) => {
    return(
        <Text>No match for {route.location.pathname}</Text>
    );
};
export default NoMatch;