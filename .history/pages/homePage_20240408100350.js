import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-ui-lib";

export default function homePage() {
  return (
    <View>
      <Text>homePage</Text>
      <Card
        flex
        center
        height={160}
        activeOpacity={0.5}
        onPress={() => console.log("pressed")}
      >
        <Card.Image width={115} imageSource={"../assets/favicon.png"} />
        <Card.Section body>
          <Card.Section>
            <Text text70 dark10>
              You’re Invited!
            </Text>
          </Card.Section>
          <Card.Section>
            <Text text80 dark10>
              Join Old The Town Barbershop Official Store. Download the Wix app
              to...
            </Text>
          </Card.Section>
          <Card.Section footer>
            <Text text90 dark50>
              wix.to/A465c
            </Text>
          </Card.Section>
        </Card.Section>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
