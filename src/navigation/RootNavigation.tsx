import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "./tab/TabNavigator";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
