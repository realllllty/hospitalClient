import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-ui-lib";

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
        <Text>Card Content</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
