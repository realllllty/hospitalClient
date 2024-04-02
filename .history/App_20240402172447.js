import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: true, orientation: "landscape" }}
      >
        <Stack.Screen
          name="登录"
          component={LoginPage}
          options={{
            headerShown: false,
            presentation: "card",
          }}
        />
        <Stack.Screen
          name="社会登录"
          component={SocialLoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="用户确认"
          component={AgreementPage}
          options={{
            headerTitle: "确认信息",
            headerTitleAlign: "center",
            cardShadowEnabled: true,
            cardOverlayEnabled: true,
            animationEnabled: true,
            presentation: "card",
          }}
        />
        <Stack.Screen
          name="检测界面"
          component={CameraScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="完成界面"
          component={FinishPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
