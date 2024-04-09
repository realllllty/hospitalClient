import AppNavigation from "./navigation/AppNavigation.js";
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
        fontSize: 200, // 设置Toast消息的字体大小
      }}
      text2Style={{
        fontSize: 16, // 如果有第二行文字，也可以设置字体大小
      }}
    />
  ),
  // 可以继续为其他Toast类型添加配置...
};

export default function App() {
  return (
    <PaperProvider>
      <AppNavigation />
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </PaperProvider>
  );
}
