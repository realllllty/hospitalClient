import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PersonalPage() {
  return (
    <View>
      <Text>PersonalPage</Text>
      <Card row height={160} onPress={() => {}}>
        <Card.Image
          width={115}
          style={{ borderRadius: 57.5 }}
          source={require("../assets/favicon.png")}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
