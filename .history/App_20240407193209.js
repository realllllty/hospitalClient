import AppNavigation from "./navigation/AppNavigation.js";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </PaperProvider>
  );
}
