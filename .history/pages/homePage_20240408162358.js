import { StyleSheet } from "react-native";
import React from "react";

import GlobalStyles from "../GlobalStyles";
import { Button } from "react-native-paper";

export default function HomePage() {
  return (
    <View style={GlobalStyles.container}>
      <Text>HomePage</Text>
      <Button>跳转到个人中心</Button>
      <Button>跳转到</Button>
    </View>
  );
}

const styles = StyleSheet.create({});
