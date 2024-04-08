import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

export default function FeedbackPage() {
  return (
    <View>
      <View style={{ flexDirection: row }}>
        <image></image>
        <Text>管理人员：林马特</Text>
      </View>
      <Text>请对该管理人员员评价并提出宝贵的建议</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
