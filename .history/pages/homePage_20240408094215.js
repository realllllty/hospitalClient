import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function homePage() {
  return (
    <View>
      <Text>homePage</Text>
      <Card flex center onPress={() => console.log("pressed")}>
        <Card.Image
          source={{
            uri: "https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg",
          }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
