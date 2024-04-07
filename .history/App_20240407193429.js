import AppNavigation from "./navigation/AppNavigation.js";
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigation />
    </PaperProvider>
  );
}
