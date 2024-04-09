import { StyleSheet, Text, View } from "react-native";
import React from "react";

import GlobalStyles from "../GlobalStyles";
import { Button } from "react-native-paper";

export default function HomePage({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Text>HomePage</Text>
      <Button
        onPress={() => {
          navigation.navigate("登录");
        }}
      >
        跳转到个人中心
      </Button>
      <Button>跳转到意见反馈</Button>
    </View>
  );
}

const styles = StyleSheet.create({});
