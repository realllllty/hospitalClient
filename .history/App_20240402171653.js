import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";

const ExamplePage = () => {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.group}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image_4}
            source={{
              uri: "https://ide.code.fun/api/image?token=660bc87a7dc3fc0011cbe3bc&name=640f871463e784f30feea9d53ed4680a.png",
            }}
          />
        </View>
        <View style={styles.equalDivision}>
          <View style={[styles.equalDivisionItem, styles.spaceY6]}>
            <Image
              style={styles.image_5}
              source={{
                uri: "https://ide.code.fun/api/image?token=660bc87a7dc3fc0011cbe3bc&name=16551312356205125204.png",
              }}
            />
            <Text style={styles.font_1}>地图找楼</Text>
          </View>
          <View style={[styles.equalDivisionItem, styles.spaceY6]}>
            <Image
              style={styles.image_5}
              source={{
                uri: "https://ide.code.fun/api/image?token=660bc87a7dc3fc0011cbe3bc&name=16551312356216119962.png",
              }}
            />
            <Text style={styles.font_1}>核心商圈</Text>
          </View>
          <View style={[styles.equalDivisionItem, styles.spaceY6]}>
            <Image
              style={styles.image_5}
              source={{
                uri: "https://ide.code.fun/api/image?token=660bc87a7dc3fc0011cbe3bc&name=16551312356222324005.png",
              }}
            />
            <Text style={styles.font_1}>全景参观</Text>
          </View>
          <View style={[styles.equalDivisionItem, styles.spaceY6]}>
            <Image
              style={styles.image_5}
              source={{
                uri: "https://ide.code.fun/api/image?token=660bc87a7dc3fc0011cbe3bc&name=16551312356230545511.png",
              }}
            />
            <Text style={styles.font_1}>咨询热线</Text>
          </View>
        </View>
        <View style={styles.group_1}>
          <Text style={styles.text_3}>热推空间</Text>
          <View>
            {/* This should be iterated based on your items data */}
            <View style={[styles.group_2, styles.listItem, styles.spaceX16]}>
              <Image
                style={styles.image_6}
                source={{
                  uri: "https://ide.code.fun/api/image?token=660bc87a7dc3fc0011cbe3bc&name=a327b1be18e75b357df61b244c2fd26a.png",
                }}
              />
              <View style={[styles.flexAuto, styles.spaceY29]}>
                <View style={[styles.itemsStart, styles.spaceY8]}>
                  <Text style={styles.font_2}>维新软件科学园</Text>
                  <Text style={styles.font_3}>深圳市南山区中心路3331号</Text>
                </View>
                <View
                  style={[
                    styles.justifyEnd,
                    styles.itemsBaseline,
                    styles.spaceX3Reverse,
                  ]}
                >
                  <Text style={styles.font_4}>¥1,870</Text>
                  <Text style={styles.font_3}>起/工位/月</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  group: {
    paddingVertical: 10,
    paddingHorizontal: 19,
    overflow: "hidden",
  },
  image_4: {
    borderRadius: 8,
    width: 335,
    height: 150,
  },
  equalDivision: {
    marginTop: 27,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  equalDivisionItem: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 0,
  },
  spaceY6: {
    justifyContent: "space-between",
  },
  image_5: {
    borderRadius: 48,
    width: 48,
    height: 48,
  },
  font_1: {
    fontSize: 13,
    fontFamily: "PingFangSC-Regular",
    lineHeight: 18,
    color: "#000",
  },
  group_1: {
    marginTop: 23,
  },
  text_3: {
    color: "#000",
    fontSize: 15,
    fontFamily: "PingFangSC-Semibold",
    fontWeight: "600",
    lineHeight: 21,
  },
  group_2: {
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
  image_6: {
    borderRadius: 4,
    width: 100,
    height: 100,
  },
  spaceY29: {
    justifyContent: "space-between",
  },
  spaceY8: {
    justifyContent: "space-between",
  },
  font_2: {
    fontSize: 15,
    fontFamily: "PingFangSC-Regular",
    lineHeight: 21,
    color: "#000",
  },
  font_3: {
    fontSize: 13,
    fontFamily: "PingFangSC-Regular",
    lineHeight: 18,
    color: "#888",
  },
  spaceX3Reverse: {
    flexDirection: "row-reverse",
    alignItems: "baseline",
  },
  font_4: {
    fontSize: 17,
    fontFamily: "PingFangSC-Regular",
    lineHeight: 24,
    color: "#000",
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    marginBottom: 16, // Assuming you want some space between items
  },
  spaceX16: {
    justifyContent: "space-between",
  },
  flexAuto: {
    flex: 1,
  },
  itemsStart: {
    alignItems: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  itemsBaseline: {
    alignItems: "baseline",
  },
});

export default ExamplePage;
