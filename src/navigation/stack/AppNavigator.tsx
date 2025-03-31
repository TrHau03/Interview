import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { screens } from "./RootStack";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator id={undefined}>
      {screens.map((screen) => {
        return (
          <AppStack.Screen
            key={null}
            name={""}
            component={(<></>) as any}
            options={undefined}
          />
        );
      })}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
