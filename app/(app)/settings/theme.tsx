import { View } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import { IconDevices, IconMoon, IconSun } from "@tabler/icons-react-native";
import { useThemeStore } from "@/shared/hooks/use-theme";

export default function SettingsScreen() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const userImage = require("../../../assets/gatito_persa.png");

  return (
    <View className="flex-1">
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Opciones de Configuración */}
      <View className="mb-4 overflow-hidden rounded-lg bg-white dark:bg-[#212121]">
        <SettingsButton
          icon={IconSun}
          title="Claro"
          selected={theme === "light"}
          onPress={() => setTheme("light")}
        />
        <SettingsButton
          icon={IconMoon}
          title="Oscuro"
          selected={theme === "dark"}
          onPress={() => setTheme("dark")}
        />

        <SettingsButton
          icon={IconDevices}
          title="Sistema"
          isLast
          selected={theme === "system"}
          onPress={() => setTheme("system")}
        />
      </View>
    </View>
  );
}
