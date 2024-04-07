import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MD2Colors, TextInput, Button } from "react-native-paper";

export default function RegisterPage() {
  return (
    <View>
      <TextInput
        label="请输入您的手机号"
        style={styles.noPaddingInput}
        placeholderTextColor={MD2Colors.gray400}
        placeholder="输入手机号"
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        right={<TextInput.Icon icon="phone" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
