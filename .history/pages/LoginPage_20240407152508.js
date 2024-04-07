import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../GlobalStyles";

import {
  ActivityIndicator,
  MD2Colors,
  HelperText,
  TextInput,
  Button,
} from "react-native-paper";

export default function LoginPagePage({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);

  const inputActionHandler = (field, value) => {
    if (field === "phoneNumber") {
      setPhoneNumber(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };

  // 假设这是登录函数，调用后成功登录
  const handleLogin = () => {
    // 登录逻辑...

    // 登录成功后，使用navigation.navigate跳转到HomePage
    navigation.navigate("首页");
  };

  const handleRegister = () => {
    navigation.navigate("注册");
  };

  const handleForget = () => {
    navigation.navigate("忘记密码");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>智慧养老院健康管理系统</Text>
      <Text style={styles.subHeaderText}>登录</Text>
      <TextInput
        label="请输入您的手机号"
        style={GlobalStyles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入手机号"
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        right={<TextInput.Icon icon="phone" />}
      />

      <TextInput
        label="请输入您的密码"
        style={GlobalStyles.noPaddingInput}
        placeholder="输入密码"
        placeholderTextColor={MD2Colors.gray400}
        secureTextEntry={flatTextSecureEntry}
        value={password}
        onChangeText={(value) => inputActionHandler("password", value)}
        right={
          <TextInput.Icon
            icon={flatTextSecureEntry ? "eye" : "eye-off"}
            onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
            forceTextInputFocus={false}
          />
        }
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Button onPress={handleRegister}>立即注册</Button>
        <Button onPress={handleForget}>忘记密码</Button>
      </View>
      <Button
        mode="elevated"
        style={styles.button}
        buttonColor={"#1652ca"}
        textColor="white"
        onPress={handleLogin}
        labelStyle={styles.ButtonFontStyles}
      >
        登录
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 35,
    marginTop: 60,
    letterSpacing: 1,
  },
  subHeaderText: {
    fontSize: 25,
    marginBottom: 40,
    fontWeight: 200,
  },
  button: {
    borderRadius: 6,
    width: "40%",
    alignSelf: "center",
    marginTop: 100,
  },
  ButtonFontStyles: {},
});
