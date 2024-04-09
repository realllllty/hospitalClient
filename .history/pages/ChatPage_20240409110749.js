import React, { useState, useCallback, useEffect } from "react";
import {
  GiftedChat,
  Bubble,
  Send,
  InputToolbar,
} from "react-native-gifted-chat";
// 引入中文语言包
import "dayjs/locale/zh-cn";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "码农先生，开始聊天吧！",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  const onSend = useCallback((msg = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, msg));
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: "black",
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: "#fff",
          },
          right: {
            backgroundColor: "#95ec69",
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props} alwaysShowSend={true}>
        <View style={styles.sendBtn}>
          <Text style={{ color: "#ffffff", fontSize: 17 }}>发送</Text>
        </View>
      </Send>
    );
  };

  return (
    <SafeAreaView style={styles.mainContent}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        showUserAvatar={true}
        locale={"zh-cn"}
        showAvatarForEveryMessage={true}
        renderBubble={renderBubble}
        placeholder={"开始聊天吧"}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar} // 添加这行来自定义输入栏
        inverted={true}
        renderUsernameOnMessage={true}
        user={{
          _id: 50,
          name: "阳光",
          avatar: "https://placeimg.com/140/140/any",
        }}
        alignTop={true}
      />
      <View style={{ backgroundColor: "white", height: 10 }}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: "#ededed",
  },
  sendBtn: {
    width: 63,
    height: 32,
    borderRadius: 3,
    backgroundColor: "#07c160",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginRight: 5,
  },
});
