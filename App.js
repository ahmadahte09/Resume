import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ResumeForm from "./ResumeForm";
import ShowCV from "./ShowCV";
import store from "./store";
import { Provider } from "react-redux";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ResumeForm">
          <Stack.Screen
            name="ResumeForm"
            component={ResumeForm}
            options={{ title: "Resume Input" }}
          />
          <Stack.Screen
            name="ShowCV"
            component={ShowCV}
            options={{ title: "Your CV" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
