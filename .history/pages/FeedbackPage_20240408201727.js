import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

// 星级评分组件
const StarRating = ({ rating, onRate }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[1, 2, 3, 4, 5].map((rate) => (
        <IconButton
          key={rate}
          icon={rate <= rating ? "star" : "star-outline"}
          color={rate <= rating ? "gold" : "grey"}
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
    <View>
      <View style={{ flexDirection: "row" }}>
        {/* <image></image> */}
        <Text>管理人员：林马特</Text>
      </View>
      <Text>请对该管理人员员评价并提出宝贵的建议</Text>
      <StarRating rating={rating} onRate={setRating} />
    </View>
  );
}

const styles = StyleSheet.create({});
