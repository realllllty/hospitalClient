import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button, Avatar } from "react-native-paper";

export default function PersonalPage({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <View style={styles.flexRow}>
        <Avatar.Image size={50} source={require("../assets/oldman.jpg")} />

        <View>
          <Text>老人 </Text>
          <Text>本人 </Text>
        </View>
      </View>

      <Button
        mode="elevated"
        buttonColor={"white"}
        icon="chevron-right"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        退出
      </Button>
      <Button
        mode="elevated"
        buttonColor={"white"}
        icon="chevron-right"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        切换账号
      </Button>
      <Button
        mode="elevated"
        buttonColor={"white"}
        icon="chevron-right"
        onPress={() => {
          navigation.navigate("意见反馈");
        }}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        意见反馈
      </Button>
      <Button
        mode="elevated"
        buttonColor={"white"}
        icon="chevron-right"
        onPress={() => {
          let phoneNumber = "";

          if (Platform.OS === "android") {
            phoneNumber = "tel:${1234567890}";
          } else {
            phoneNumber = "telprompt:${1234567890}";
          }

          Linking.openURL(phoneNumber);
        }}
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    backgroundColor: "white",
    padding: 20,
  },
  button: {
    borderRadius: 5,
    marginBottom: 20,
  },
});
