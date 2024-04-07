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
          label="Input with no padding"
          style={styles.noPaddingInput}
          placeholder="Enter username, only letters"
          value={nameNoPadding}
          error={!_isUsernameValid(nameNoPadding)}
          onChangeText={(nameNoPadding) =>
            inputActionHandler("nameNoPadding", nameNoPadding)
          }
        />
        <HelperText
          type="error"
          padding="none"
          visible={!_isUsernameValid(nameNoPadding)}
        >
          Error: Only letters are allowed
        </HelperText>
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
