import { StyleSheet } from "react-native";
import React from "react";
import { Card, Text, View, Colors } from "react-native-ui-lib";
import GlobalStyles from "../GlobalStyles";

export default function homePage() {
  return (
    <View style={GlobalStyles.container}>
      <Text>homePage</Text>

      <Card row height={160} onPress={() => {}}>
        <Card.Image width={115} source={require("../assets/favicon.png")} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
