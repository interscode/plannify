import { Stack } from "expo-router";
import { useTheme } from "@/shared/hooks/use-theme";

export default function ScanLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme === "light" ? "#f8f8ff" : "#0a0a0a",
          paddingHorizontal: 25,
        },
      }}
    />
  );
}
