import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import GlobalStyles from "../GlobalStyles";
import { Button, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";
import { API_BASE_URL } from "../config";

export default function PersonalPage({ navigation }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    age: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const response = await axios.get(`${API_BASE_URL}/resident/info/2`, {
          headers: {
            token: token,
          },
        });
        if (response.data.code === 1) {
          setUserData(response.data.data);
        } else {
          // Handle the error as needed, perhaps show a Toast message
        }
      } catch (error) {
        // Handle the error, such as displaying a message to the user
      }
    };

    fetchUserInfo();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("userToken"); // 清除JWT令牌
    Toast.show({
      type: "success",
      text1: "成功退出",
    });
    navigation.navigate("登录"); // 导航到登录页面
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.flexRow}>
        <Avatar.Image size={90} source={require("../assets/oldman.jpg")} />

        <View
          style={{
            gap: 20,
            alignItems: "center",
            backgroundColor: "#f2f2f2",
            padding: 17,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 17 }}>
            <Text style={{ fontWeight: "bold" }}>老人：</Text>
            {userData.firstName} {userData.lastName}
          </Text>
          <Text style={{ fontSize: 17 }}>
            <Text style={{ fontWeight: "bold" }}>年龄：</Text>
            {userData.age} 岁
          </Text>
          <Text style={{ fontSize: 17 }}>
            <Text style={{ fontWeight: "bold" }}>本人：</Text>
            {userData.username}
          </Text>
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
      {/* <Button
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
      </Button> */}
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
    borderRadius: 5,
    alignItems: "center",
  },
  button: {
    borderRadius: 5,
    marginBottom: 30,
  },
});
