import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import {
  ActivityIndicator,
  MD2Colors,
  HelperText,
  TextInput,
} from "react-native-paper";

export default function HomePage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />

      <TextInput
        label="请输入手机号"
        style={styles.noPaddingInput}
        placeholder="输入数字"
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        left={<TextInput.Icon icon="phone" />}
      />

      <TextInput
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  noPaddingInput: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
  },
});
