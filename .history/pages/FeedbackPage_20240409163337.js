import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { IconButton, TextInput, Button } from "react-native-paper";
import GlobalStyles from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";

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

  const submitFeedback = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken"); // 从AsyncStorage获取JWT令牌
      if (!token) {
        Toast.show({ type: "error", text1: "未检测到用户登录" });
        return;
      }

      const response = await axios.post(
        "http://192.168.43.158:8080/member/evaluate",
        {
          staff_id: 2,
          resident_id: 3,
          star: rating,
          comment: text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 在请求头中附加JWT令牌
          },
        }
      );

      // 根据响应处理逻辑
      if (response.data.code === 1) {
        Toast.show({ type: "success", text1: "反馈成功" });
      } else {
        Toast.show({ type: "error", text1: response.data.msg || "反馈失败" });
      }
    } catch (error) {
      Toast.show({ type: "error", text1: "网络请求失败" });
    }
  };

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
        style={{ height: 150, marginBottom: 40 }} // 调整高度以适应更多的文本
        placeholder="请输入意见和建议"
        outlineStyle={{ borderRadius: 10 }}
      />
      <Button
        mode="elevated"
        style={styles.bigButton}
        buttonColor={"#1652ca"}
        textColor="white"
        onPress={submitFeedback}
        disabled={rating === 0 || text === ""}
        labelStyle={GlobalStyles.ButtonFontStyles}
      >
        提交反馈
      </Button>
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
  bigButton: {
    borderRadius: 6,
    width: "100%",
    alignSelf: "center",
  },
});
