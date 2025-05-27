import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import { IconSearch } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { useAuth } from "../hooks/use-auth";
import { useTheme } from "../hooks/use-theme";
import { useTranslation } from "react-i18next";

export default function Header({ route, options }: BottomTabHeaderProps) {
  const title = getHeaderTitle(options, route.name);
  const { user } = useAuth();
  const { theme } = useTheme();
  const { t } = useTranslation();

  if (route.name === "home") {
    return (
      <View
        className="h-16 w-full flex-row items-center gap-2 pb-2"
        style={{ paddingHorizontal: 25 }}
      >
        <View className="size-12 items-center justify-center rounded-xl bg-primary">
          <Text className="text-2xl font-bold text-white">
            {user?.name?.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View>
          <Text className="dark:text-light">{t("home.greeting")}</Text>
          <Text className="text-xl font-bold dark:text-light">
            {user?.name}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      className="h-16 w-full flex-row items-center justify-between"
      style={{ paddingHorizontal: 25 }}
    >
      <Text className="text-2xl font-bold dark:text-light">{title}</Text>
      <IconSearch color={theme === "light" ? "#0a0a0a" : "#f8f8ff"} />
    </View>
  );
}
