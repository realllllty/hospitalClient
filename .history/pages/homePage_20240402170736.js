import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const App = () => {
  // 模拟数据
  const items = []; // 你的列表数据

  return (
    <ScrollView style={styles.page}>
      <View style={styles.group}>
        <Image source={{ uri: "图片URL" }} style={styles.image_4} />
        <View style={styles.equalDivision}>
          {/* 这里重复等分项的代码 */}
          <View style={styles.equalDivisionItem}>
            <Image source={{ uri: "图片URL" }} style={styles.image_5} />
            <Text style={styles.font_1}>地图找楼</Text>
          </View>
          {/* 其他等分项以相同方式添加 */}
        </View>
        <View style={styles.group_1}>
          <Text style={styles.text_3}>热推空间</Text>
          {items.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Image source={{ uri: "图片URL" }} style={styles.image_6} />
              <View style={styles.itemDetail}>
                <Text style={styles.font_2}>维新软件科学园</Text>
                <Text style={styles.font_3}>深圳市南山区中心路3331号</Text>
                <View style={styles.priceTag}>
                  <Text style={styles.font_4}>¥1,870</Text>
                  <Text style={styles.font_3}>起/工位/月</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  group: {
    padding: 20,
  },
  image_4: {
    borderRadius: 16,
    width: 670,
    height: 300,
  },
  equalDivision: {
    marginTop: 54,
    flexDirection: "row",
  },
  equalDivisionItem: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  image_5: {
    borderRadius: 48, // 假设96rpx为直径
    width: 96,
    height: 96,
  },
  font_1: {
    fontSize: 26,
    fontFamily: "PingFangSC-Regular",
    lineHeight: 36,
    color: "#000000",
  },
  group_1: {
    marginTop: 46,
  },
  text_3: {
    color: "#000000",
    fontSize: 30,
    fontFamily: "PingFangSC-Semibold",
    fontWeight: "600",
    lineHeight: 42,
  },
  listItem: {
    flexDirection: "row",
    paddingBottom: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#dddddd",
  },
  image_6: {
    borderRadius: 8,
    width: 200,
    height: 200,
  },
  itemDetail: {
    flex: 1,
    paddingLeft: 32,
    justifyContent: "space-between",
  },
  font_2: {
    fontSize: 30,
    fontFamily: "PingFangSC-Regular",
    lineHeight: 42,
    color: "#000000",
  },
  font_3: {
    fontSize: 26,
    fontFamily: "PingFangSC-Regular",
    lineHeight: 36,
    color: "#888888",
  },
  font_4: {
    fontSize: 34,
    fontFamily: "PingFangSC-Regular",
    lineHeight: 48,
    color: "#000000",
  },
  priceTag: {
    flexDirection: "row-reverse",
    alignItems: "baseline",
  },
});

export default App;
