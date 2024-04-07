import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { MD2Colors, TextInput, Button, Divider } from "react-native-paper";
import GlobalStyles from "../GlobalStyles";
import Toast from "react-native-toast-message";

export default function RegisterPage({ navigation }) {
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [elderID, setElderID] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("transparent");

  const sendVerificationCode = () => {
    // 启动倒计时
    setTimer(60);
    setIsButtonDisabled(true);
  };

  const handleRegister = () => {
    // 用户名验证：3-8位字符
    if (!userName || userName.length < 3 || userName.length > 8) {
      Toast.show({
        type: "error",
        text1: "用户名必须是3-8位字符",
      });
      return;
    }

    // 手机号验证：11位数字
    if (
      !phoneNumber ||
      phoneNumber.length !== 11 ||
      !/^\d+$/.test(phoneNumber)
    ) {
      Toast.show({
        type: "error",
        text1: "手机号错误",
      });
      return;
    }

    // 密码验证：6-16位字母加数字
    if (
      !password ||
      password.length < 6 ||
      password.length > 16 ||
      !/^[A-Za-z0-9]+$/.test(password)
    ) {
      Toast.show({
        type: "error",
        text1: "密码格式错误",
      });
      return;
    }

    // 密码二次确认
    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "两次输入的密码不一致",
      });
      return;
    }

    // 老人ID验证：是否为数字
    if (!elderID || !/^\d+$/.test(elderID)) {
      Toast.show({ type: "error", text1: "老人ID必须是数字" });
      return;
    }

    Toast.show({ type: "success", text1: "注册成功" });

    navigation.navigate("登录");
  };

  useEffect(() => {
    let intervalId;

    if (isButtonDisabled) {
      intervalId = setInterval(() => {
        setTimer((t) => {
          if (t === 1) {
            clearInterval(intervalId);
            setIsButtonDisabled(false);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }

    // 清理interval
    return () => clearInterval(intervalId);
  }, [isButtonDisabled]);

  return (
    <View style={GlobalStyles.container}>
      <TextInput
        label="请输入用户名"
        style={GlobalStyles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入用户名"
        value={userName}
        maxLength={8}
        onChangeText={(value) => setUserName(value)}
        right={<TextInput.Icon icon="account" />}
      />
      <TextInput
        label="请输入11位手机号"
        style={GlobalStyles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入手机号"
        maxLength={11}
        value={phoneNumber}
        onChangeText={(value) => setPhoneNumber(value)}
        right={<TextInput.Icon icon="phone" />}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 25,
        }}
      >
        <TextInput
          label="请输入验证码"
          style={[GlobalStyles.noPaddingInput]}
          placeholderTextColor={MD2Colors.gray400}
          placeholder="输入验证码"
          value={verificationCode}
          onChangeText={(value) => setVerificationCode(value)}
        />
        <Button
          mode="contained"
          style={{ borderRadius: 6, width: 120 }}
          buttonColor={"#1652ca"}
          onPress={sendVerificationCode}
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? `${timer}s` : "发送验证码"}
        </Button>
      </View>

      {/* <Divider style={{ marginTop: 15 }} /> */}

      <TextInput
        label="请输入老人ID"
        style={GlobalStyles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入ID"
        value={elderID}
        onChangeText={(value) => setElderID(value)}
        right={<TextInput.Icon icon="card-account-details-outline" />}
      />

      <TextInput
        label="请输入您的密码"
        style={GlobalStyles.noPaddingInput}
        placeholder="输入密码"
        placeholderTextColor={MD2Colors.gray400}
        secureTextEntry={flatTextSecureEntry}
        value={password}
        onChangeText={(value) => setPassword(value)}
        right={
          <TextInput.Icon
            icon={flatTextSecureEntry ? "eye" : "eye-off"}
            onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
          />
        }
      />
      <TextInput
        label="请再次输入您的密码"
        style={GlobalStyles.noPaddingInput}
        placeholder="确认密码"
        placeholderTextColor={MD2Colors.gray400}
        secureTextEntry={flatTextSecureEntry}
        value={confirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
        right={
          <TextInput.Icon
            icon={flatTextSecureEntry ? "eye" : "eye-off"}
            onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
          />
        }
      />
      <Button
        mode="elevated"
        style={GlobalStyles.button}
        buttonColor={"#1652ca"}
        textColor="white"
        onPress={handleRegister}
        labelStyle={styles.ButtonFontStyles}
      >
        注册
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
