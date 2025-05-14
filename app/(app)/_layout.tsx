import Header from "@/shared/components/header";
import {
  IconCalendar,
  IconCalendarFilled,
  IconHome,
  IconHomeFilled,
  IconSettings,
  IconSquareRoundedCheck,
} from "@tabler/icons-react-native";
import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000080",
        header: ({ route, navigation, options, layout }) => (
          <Header
            route={route}
            navigation={navigation}
            options={options}
            layout={layout}
          />
        ),
        sceneStyle: { backgroundColor: "#f8f8ff", paddingHorizontal: 25 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconHomeFilled size={28} color={color} fill={color} />
            ) : (
              <IconHome size={28} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="calendar/index"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color, focused }) => (
            <IconCalendar size={28} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color }) => (
            <IconSquareRoundedCheck size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <IconSettings size={28} color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
