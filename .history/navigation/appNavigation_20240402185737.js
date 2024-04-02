import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/homePage";

const Stack = createNativeStackNavigator();

export default function appNavigation() {
  return (
    <View>
      <Text>appNavigation</Text>
    </View>
  );
}
