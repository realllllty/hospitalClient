import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/homePage";

const Stack = createNativeStackNavigator();

export default function appNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: true, orientation: "landscape" }}
      >
        <Stack.Screen
          name="登录"
          component={LoginPage}
          options={{
            headerShown: false,
            presentation: "card",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
