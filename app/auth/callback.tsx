import Logo from "@/shared/components/logo";
import { View } from "react-native";
import { useTheme } from "@/shared/hooks/use-theme";
import { ActivityIndicator } from "react-native";
import { useSchedule } from "@/features/schedule/hooks/use-schedule";
import { Redirect } from "expo-router";

export default function Callback() {
  const { theme } = useTheme();
  const { schedule, loading } = useSchedule();

  if (loading) {
    return (
      <View className="flex flex-1 items-center justify-center px-8 py-[5vh]">
        <Logo theme={theme} />
        <ActivityIndicator
          size="large"
          color={theme === "light" ? "#000080" : "#f8f8ff"}
          className="mt-10"
        />
      </View>
    );
  }

  if (!loading && !schedule) {
    return <Redirect href="/scan" />;
  }

  if (!loading && schedule) {
    return <Redirect href="/home" />;
  }
}
