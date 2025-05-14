import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#f8f8ff" },
      }}
    >
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
