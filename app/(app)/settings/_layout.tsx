import { useTheme } from "@/shared/hooks/use-theme";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import Header from "@/features/settings/components/header";

export default function SettingsLayout() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme === "light" ? "#f8f8ff" : "#0a0a0a",
        },
        header: ({ route, navigation, options }) => (
          <Header route={route} navigation={navigation} options={options} />
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: t("settings.configTitle"),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="language"
        options={{
          title: t("language.languageTitle"),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="notification"
        options={{
          title: t("notifications.notificationsTitle"),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="syncronization"
        options={{
          title: t("sync.syncTitle"),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="theme"
        options={{
          title: t("theme.themeTitle"),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
