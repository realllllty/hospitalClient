import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgetPassport from "../pages/ForgetPassport";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="登录"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="首页" component={HomePage} />
        <Stack.Screen
          name="注册"
          component={RegisterPage}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="忘记密码"
          component={ForgetPassport}
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
