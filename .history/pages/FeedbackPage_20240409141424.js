import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import GlobalStyles from "../GlobalStyles";

// 星级评分组件
const StarRating = ({ rating, onRate }) => {
  return (
    <View style={styles.rowStar}>
      {[1, 2, 3, 4, 5].map((rate) => (
        <IconButton
          key={rate}
          icon={rate <= rating ? "star" : "star-outline"}
          iconColor={rate <= rating ? "#FFD700" : "grey"}
          size={34}
          onPress={() => onRate(rate)}
        />
      ))}
    </View>
  );
};

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.row}>
        <Image source={require("../assets/nurse.jpg")} style={styles.image} />
        <Text style={{ fontWeight: 700, fontSize: 21 }}>管理人员：林马特</Text>
      </View>
      <Text style={{ alignSelf: "center", fontSize: 16 }}>
        请对该管理人员员评价并提出宝贵的建议
      </Text>
      <StarRating rating={rating} onRate={setRating} />

      <TextInput
        mode="outlined"
        label="输入您宝贵的意见和建议"
        value={text}
        onChangeText={(text) => setText(text)}
        multiline={true}
        numberOfLines={6} // 根据需要调整行数
        style={{ height: 150, borderRadius: 5 }} // 调整高度以适应更多的文本
        placeholder="请输入意见和建议"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 190,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  rowStar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
