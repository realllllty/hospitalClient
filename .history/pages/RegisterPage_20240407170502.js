import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { MD2Colors, TextInput, Button } from "react-native-paper";
import GlobalStyles from "../GlobalStyles";

export default function RegisterPage() {
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [elderID, setElderID] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    // 清除之前的错误消息
    setErrorMessage("");

    // 检查两次密码是否匹配
    if (password === confirmPassword) {
      // 密码匹配，继续注册逻辑
      console.log("注册逻辑，待实现");
      // 实现注册逻辑...
    } else {
      // 如果密码不匹配，设置错误消息
      setErrorMessage("两次输入的密码不匹配，请重新输入");
      return; // 终止注册逻辑
    }
  };

  const sendVerificationCode = () => {
    // 启动倒计时
    setTimer(60);
    setIsButtonDisabled(true);

    // 发送验证码的逻辑...
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
