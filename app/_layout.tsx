import { Stack } from "expo-router";
import "./global.css";
import "../i18n";
import React from "react";

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
