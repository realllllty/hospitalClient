import React, { useState, useCallback, useEffect } from "react";
import {
  GiftedChat,
  Bubble,
  Send,
  InputToolbar,
} from "react-native-gifted-chat";
import "dayjs/locale/zh-cn";
import dayjs from "dayjs";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    dayjs.locale("zh-cn");
    setMessages([
      {
        _id: 1,
        text: "你好老人家属(自动问候)",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "../assets/nurse.jpg",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
    const replies = {
      _id: Math.round(Math.random() * 1000000),
      text: '具体是什么问题',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Assistant",
        avatar: "../assets/nurse.jpg",
      },
    };
    setTimeout(() => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, [replies]));
    }, 10000); // Reply after 1 second
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

  const renderInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={styles.inputToolbar} />;
  };

  return (
    <SafeAreaView style={styles.mainContent}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        showUserAvatar={true}
        locale={"zh-cn"}
        showAvatarForEveryMessage={true}
        renderBubble={renderBubble}
        placeholder={"开始聊天吧"}
        renderSend={renderSend}
        textInputStyle={{ fontSize: 20, lineHeight: 18 }}
        renderInputToolbar={renderInputToolbar}
        inverted={true}
        renderUsernameOnMessage={true}
        user={{
          _id: 50,
          name: "阳光",
          avatar: "../assets/oldman.jpg",
        }}
        alignTop={true}
      />
      <View style={{ backgroundColor: "white", height: 10 }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputToolbar: {
    backgroundColor: "white",
    padding: 6,
  },
  sendContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 44,
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
