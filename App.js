import React from "react";



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResumeForm from "./ResumeForm";
import ShowCV from "./ShowCV";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Resume Input" component={ResumeForm} />
                <Stack.Screen name="YourCV" component={ShowCV} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}