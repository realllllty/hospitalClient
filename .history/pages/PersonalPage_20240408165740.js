import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button } from "react-native-paper";

export default function PersonalPage() {
  return (
    <View>
      <Button
        mode="outlined"
        icon="camera"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  flexReverse: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
