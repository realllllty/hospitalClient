import AppNavigation from "./navigation/appNavigation.js";
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </PaperProvider>
  );
}
