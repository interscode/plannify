import { useThemeStore } from "@/shared/hooks/use-theme";
import { Stack } from "expo-router";

export default function SettingsLayout() {
  const theme = useThemeStore((state) => state.resolvedTheme);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingHorizontal: 25,
          backgroundColor: theme === "light" ? "#f8f8ff" : "#0a0a0a",
        },
      }}
    />
  );
}
