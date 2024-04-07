import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
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

  const handleRegister = () => {
    // 这里应该是你的注册逻辑
    console.log("注册逻辑，待实现");
  };

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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          label="请输入验证码"
          style={GlobalStyles.noPaddingInput}
          placeholderTextColor={MD2Colors.gray400}
          placeholder="输入验证码"
          value={verificationCode}
          onChangeText={(value) => setVerificationCode(value)}
        />
        <Button mode="contained" contentStyle={{ justifyContent: "center" }}>
          发送验证码
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
