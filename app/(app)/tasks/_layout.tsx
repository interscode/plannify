import { Stack } from "expo-router";

export default function TasksLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#f8f8ff", paddingHorizontal: 25 },
      }}
    />
  );
}
