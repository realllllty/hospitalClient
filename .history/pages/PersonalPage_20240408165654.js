import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function PersonalPage() {
  return (
    <View>
      <Text>PersonalPage</Text>
      {/* <Card row height={160} onPress={() => {}}>
        <Card.Image
          width={115}
          style={{ borderRadius: 57.5 }}
          source={require("../assets/favicon.png")}
        />
      </Card> */}
      <Button
        mode="outlined"
        icon="camera"
        onPress={() => {}}
        style={styles.button}
        contentStyle={styles.flexReverse}
      >
        Icon right
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  flexReverse: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
