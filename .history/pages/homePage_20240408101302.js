import { StyleSheet } from "react-native";
import React from "react";
import { Card, Text, View } from "react-native-ui-lib";

import cardImage from "../assets/favicon.png";

export default function homePage() {
  return (
    <View>
      <Text>homePage</Text>

      <Card
        row
        height={160}
        containerStyle={{ marginBottom: 15 }}
        onPress={() => {}}
      >
        <Card.Image width={115} imageSource={cardImage} />
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
