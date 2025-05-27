import { useTheme } from "@/shared/hooks/use-theme";
import { Stack } from "expo-router";

export default function CalendarLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme === "light" ? "#f8f8ff" : "#0a0a0a",
        },
      }}
    />
  );
}
