import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import {
  ActivityIndicator,
  MD2Colors,
  HelperText,
  TextInput,
} from "react-native-paper";

export default function HomePage() {
  const [nameNoPadding, setNameNoPadding] = useState("");

  return (
    <View>
      <Text>Text</Text>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
      <View>
        <TextInput
          label="请输入手机号"
          style={styles.noPaddingInput}
          placeholder="输入数字"
          value={nameNoPadding}
          onChangeText={(nameNoPadding) =>
            inputActionHandler("nameNoPadding", nameNoPadding)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noPaddingInput: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
  },
});
