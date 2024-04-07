import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../GlobalStyles";
import Toast from "react-native-toast-message";

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

  const validatePhoneNumber = (phone) => {
    return phone.length === 11 && /^\d+$/.test(phone);
  };

  const validatePassword = (pwd) => {
    return pwd.length >= 6 && pwd.length <= 16 && /^[A-Za-z0-9]+$/.test(pwd);
  };

  const handleLogin = () => {
    // 假设的有效登录凭证
    const validPhoneNumber = "12345678901";
    const validPassword = "Password123";

    if (!phoneNumber) {
      Toast.show({ type: "error", text1: "手机号不能为空" });
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      Toast.show({ type: "error", text1: "手机号错误" });
      return;
    }

    if (!password) {
      Toast.show({ type: "error", text1: "密码不能为空" });
      return;
    }

    if (!validatePassword(password)) {
      Toast.show({
        type: "error",
        text1: "密码格式错误，密码为6-16位字母加数字",
      });
      return;
    }
  };

  const handleRegister = () => {
    navigation.navigate("注册");
  };

  const handleForget = () => {
    navigation.navigate("忘记密码");
  };

  if (isLoginSuccess && isPasswordCorrect) {
    // 登录成功且密码正确，跳转到首页
    navigation.navigate("首页");
  } else if (!isLoginSuccess) {
    // 如果登录不成功（可能是因为用户不存在或其他原因），显示适当的错误消息
    Toast.show({ type: "error", text1: "登录失败，请检查您的账户信息" });
  } else if (!isPasswordCorrect) {
    // 如果密码不正确，显示密码错误的消息
    Toast.show({ type: "error", text1: "密码错误" });
  }

  return (
    <View style={GlobalStyles.container}>
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
        style={GlobalStyles.button}
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

  ButtonFontStyles: {},
});
