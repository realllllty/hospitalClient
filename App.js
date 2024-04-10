import AppNavigation from "./navigation/appNavigation.js";
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import { BaseToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18, // 设置Toast消息的字体大小
      }}
      text2Style={{
        fontSize: 16, // 如果有第二行文字，也可以设置字体大小
      }}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "red" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18, // 设置失败消息的字体大小
      }}
      text2Style={{
        fontSize: 16, // 如果有第二行文字，也可以设置字体大小
      }}
    />
  ),
};

export default function App() {
  return (
    <PaperProvider>
      <AppNavigation />
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </PaperProvider>
  );
}
