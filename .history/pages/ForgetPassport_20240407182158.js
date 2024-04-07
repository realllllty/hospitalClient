import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { MD2Colors, TextInput, Button } from "react-native-paper";
import GlobalStyles from "../GlobalStyles";

export default function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("transparent");

  const sendVerificationCode = () => {
    // 启动倒计时
    setTimer(60);
    setIsButtonDisabled(true);
    // 逻辑发送验证码...
  };

  const handlePasswordReset = () => {
    // 清除之前的消息
    setFeedbackMessage("");
    setFeedbackColor("transparent");

    // 检查两次新密码是否匹配
    if (newPassword === confirmNewPassword) {
      // 密码匹配，继续密码重置逻辑
      console.log("密码重置逻辑，待实现");
      // 假设密码重置成功
      setFeedbackColor(MD2Colors.green600);
      setFeedbackMessage("密码重置成功!");
    } else {
      // 如果密码不匹配，设置错误消息
      setFeedbackColor("red");
      setFeedbackMessage("两次输入的密码不匹配，请重新输入");
    }
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
        label="请输入11位手机号"
        style={GlobalStyles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入手机号用于验证"
        maxLength={11}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        right={<TextInput.Icon icon="phone" />}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          label="请输入手机验证码"
          style={[GlobalStyles.noPaddingInput, { flex: 1, marginRight: 10 }]}
          placeholderTextColor={MD2Colors.gray400}
          placeholder="输入验证码"
          value={verificationCode}
          onChangeText={setVerificationCode}
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
        label="请输入新密码"
        style={GlobalStyles.noPaddingInput}
        placeholder="新密码"
        placeholderTextColor={MD2Colors.gray400}
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
        right={<TextInput.Icon icon="lock" />}
      />
      <TextInput
        label="请再次输入新密码"
        style={GlobalStyles.noPaddingInput}
        placeholder="确认新密码"
        placeholderTextColor={MD2Colors.gray400}
        secureTextEntry={true}
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        right={<TextInput.Icon icon="lock" />}
      />
      <Text
        style={{
          color: feedbackColor,
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        {feedbackMessage}
      </Text>
      <Button
        mode="elevated"
        style={GlobalStyles.button}
        buttonColor={"#1652ca"}
        textColor="white"
        onPress={handlePasswordReset}
      >
        确定
      </Button>
    </View>
  );
}
