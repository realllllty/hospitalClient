import { StyleSheet, Text, View, useState } from "react-native";
import React from "react";
import { MD2Colors, TextInput, Button } from "react-native-paper";

export default function RegisterPage() {
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);

  return (
    <View>
      <TextInput
        label="请输入用户名"
        style={styles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入用户名"
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        right={<TextInput.Icon icon="phone" />}
      />
      <TextInput
        label="请输入11位手机号"
        style={styles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入手机号"
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        right={<TextInput.Icon icon="phone" />}
      />
      <TextInput
        label="请输入验证码"
        style={styles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入用户名"
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        right={<TextInput.Icon icon="phone" />}
      />
      <TextInput
        label="请输入用户名"
        style={styles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入用户名"
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        right={<TextInput.Icon icon="phone" />}
      />
      <TextInput
        label="请输入您的密码"
        style={styles.noPaddingInput}
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
    </View>
  );
}

const styles = StyleSheet.create({
  noPaddingInput: {
    backgroundColor: "transparent",
  },
});
