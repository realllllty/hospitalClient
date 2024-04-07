import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MD2Colors, TextInput, Button } from "react-native-paper";

export default function RegisterPage() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  noPaddingInput: {
    backgroundColor: "transparent",
  },
});
