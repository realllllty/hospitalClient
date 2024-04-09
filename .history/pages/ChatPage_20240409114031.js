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
          left: {
            fontSize: 20,
          },
          right: {
            color: "black",
            fontSize: 20,
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: "#fff",
            padding: 5,
          },
          right: {
            backgroundColor: "#95ec69",
            padding: 5,
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send
        {...props}
        alwaysShowSend={true}
        containerStyle={styles.sendContainer}
      >
        <View style={styles.sendBtn}>
          <Text style={{ color: "#ffffff", fontSize: 20 }}>发送</Text>
        </View>
      </Send>
    );
  };

  // 为了自定义输入栏的高度，您可以创建一个 renderInputToolbar 函数
  const renderInputToolbar = (props) => {
    // 这里自定义输入栏的样式
    return <InputToolbar {...props} containerStyle={styles.inputToolbar} />;
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
        textInputStyle={{ fontSize: 20, lineHeight: 18 }}
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
  inputToolbar: {
    // 添加自定义输入栏的样式
    backgroundColor: "white",
    padding: 6,
  },
  sendContainer: {
    // 添加自定义发送按钮容器的样式
    justifyContent: "center",
    alignItems: "center",
    height: 44, // 设置按钮的高度
    paddingRight: 10,
  },
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
