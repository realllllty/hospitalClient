import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import GlobalStyles from "../GlobalStyles";

// 星级评分组件
const StarRating = ({ rating, onRate }) => {
  return (
    <View style={styles.row}>
      {[1, 2, 3, 4, 5].map((rate) => (
        <IconButton
          key={rate}
          icon={rate <= rating ? "star" : "star-outline"}
          iconColor={rate <= rating ? "#FFD700" : "grey"}
          size={24}
          onPress={() => onRate(rate)}
        />
      ))}
    </View>
  );
};

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.row}>
        <Image source={require("../assets/nurse.jpg")} style={styles.image} />
        <Text>管理人员：林马特</Text>
      </View>
      <Text>请对该管理人员员评价并提出宝贵的建议</Text>
      <StarRating rating={rating} onRate={setRating} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: "auto",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
