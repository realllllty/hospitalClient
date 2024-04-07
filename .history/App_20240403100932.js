import AppNavigation from "./navigation/AppNavigation.js";
import { PaperProvider } from "react-native-paper";
import * as React from "react";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigation />
    </PaperProvider>
  );
}
