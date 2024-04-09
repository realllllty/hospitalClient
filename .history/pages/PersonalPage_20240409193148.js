import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import GlobalStyles from "../GlobalStyles";
import { Button, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function PersonalPage({ navigation }) {
  const logout = async () => {
    await AsyncStorage.removeItem("userToken"); // 清除JWT令牌
    navigation.navigate("LoginPage"); // 导航到登录页面
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.flexRow}>
        <Avatar.Image size={90} source={require("../assets/oldman.jpg")} />

        <View style={{ gap: 20 }}>
          <Text style={{ fontSize: 17 }}>老人 xxx 年龄 60 </Text>
          <Text style={{ fontSize: 17 }}>本人 xxx </Text>
        </View>
      </View>

      <Button
        mode="elevated"
        buttonColor={"white"}
        icon="chevron-right"
        onPress={logout}
        style={styles.button}
        contentStyle={styles.flexReverse}
        labelStyle={{ fontSize: 20 }}
        iconSize={35}
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
        labelStyle={{ fontSize: 20 }}
        iconSize={35}
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
        labelStyle={{ fontSize: 20 }}
        iconSize={35}
      >
        意见反馈
      </Button>
      <Button
        mode="elevated"
        buttonColor={"white"}
        icon="chevron-right"
        onPress={() => {
          navigation.navigate("联系管理人员");
        }}
        style={styles.button}
        contentStyle={styles.flexReverse}
        labelStyle={{ fontSize: 20 }}
        iconSize={35}
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
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 3,
  },
  button: {
    borderRadius: 5,
    marginBottom: 30,
  },
});
