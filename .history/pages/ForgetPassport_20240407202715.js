import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { MD2Colors, TextInput, Button } from "react-native-paper";
import GlobalStyles from "../GlobalStyles";
import Toast from "react-native-toast-message";

export default function ForgotPassword({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("transparent");
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);

  const sendVerificationCode = () => {
    // 启动倒计时
    setTimer(60);
    setIsButtonDisabled(true);
    // 逻辑发送验证码...
  };

  const handlePasswordReset = () => {
    // 手机号格式验证
    if (!validatePhoneNumber(phoneNumber)) {
      Toast.show({ type: "error", text1: "请输入正确的手机号" });
      return;
    }

    // 假设这里是验证手机验证码的逻辑
    // 验证码逻辑跳过，因为需要后端配合
    // if (!validateVerificationCode(verificationCode)) {
    //   Toast.show({ type: "error", text1: "密保问题不正确" }); // 实际上应是验证码不正确
    //   return;
    // }

    // 检查两次新密码是否匹配
    if (newPassword !== confirmNewPassword) {
      Toast.show({ type: "error", text1: "两次输入的密码不一致" });
      return;
    }

    // 假设密码重置成功
    Toast.show({ type: "success", text1: "密码重置成功!" });

    // 跳转到登录页面
    navigation.navigate("登录页面名称"); // 确保替换为你的登录页面的实际路由名称
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
        right={
          <TextInput.Icon
            icon={flatTextSecureEntry ? "eye" : "eye-off"}
            onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
          />
        }
      />
      <TextInput
        label="请再次输入新密码"
        style={GlobalStyles.noPaddingInput}
        placeholder="确认新密码"
        placeholderTextColor={MD2Colors.gray400}
        secureTextEntry={true}
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        right={
          <TextInput.Icon
            icon={flatTextSecureEntry ? "eye" : "eye-off"}
            onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
          />
        }
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
