import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button } from "react-native-paper";

export default function PersonalPage() {
  return (
    <View style={GlobalStyles.container}>
      <Button
        mode="outlined"
        icon="chevron-right"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        退出
      </Button>
      <Button
        mode="outlined"
        icon="chevron-right"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        切换账号
      </Button>
      <Button
        mode="outlined"
        icon="chevron-right"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        意见反馈
      </Button>
      <Button
        mode="outlined"
        icon="chevron-right"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        联系管理人员
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  flexReverse: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderRadius: 20,
  },
});
