import Header from "@/shared/components/header";
import {
  IconCalendar,
  IconHome,
  IconHomeFilled,
  IconSettings,
  IconSquareRoundedCheck,
} from "@tabler/icons-react-native";
import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/shared/hooks/use-theme";

export default function AppLayout() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme === "light" ? "#0a0a0a" : "#f8f8ff",
        tabBarStyle: {
          backgroundColor: theme === "light" ? "#f8f8ff" : "#0a0a0a",
        },
        header: ({ route, navigation, options, layout }) => (
          <Header
            route={route}
            navigation={navigation}
            options={options}
            layout={layout}
          />
        ),
        sceneStyle: {
          backgroundColor: theme === "light" ? "#f8f8ff" : "#0a0a0a",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t("home.homeTitle"),
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconHomeFilled size={28} color={color} fill={color} />
            ) : (
              <IconHome size={28} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: t("calendar.calendarTitle"),
          tabBarIcon: ({ color }) => <IconCalendar size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: t("tasks.tasksTitle"),
          tabBarIcon: ({ color }) => (
            <IconSquareRoundedCheck size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t("settings.configTitle"),
          tabBarIcon: ({ color }) => <IconSettings size={28} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
