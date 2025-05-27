import { View } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import { IconDevices, IconMoon, IconSun } from "@tabler/icons-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/shared/hooks/use-theme";

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { currentTheme, setCurrentTheme } = useTheme();

  return (
    <View className="flex-1" style={{ paddingHorizontal: 25 }}>
      <UserCard />

      {/* Opciones de Configuración */}
      <View className="mb-4 overflow-hidden rounded-lg bg-white dark:bg-[#212121]">
        <SettingsButton
          icon={IconSun}
          title={t("theme.lightTheme")}
          selected={currentTheme === "Light"}
          onPress={() => setCurrentTheme("Light")}
        />
        <SettingsButton
          icon={IconMoon}
          title={t("theme.darkTheme")}
          selected={currentTheme === "Dark"}
          onPress={() => setCurrentTheme("Dark")}
        />

        <SettingsButton
          icon={IconDevices}
          title={t("theme.systemTheme")}
          isLast
          selected={currentTheme === "System"}
          onPress={() => setCurrentTheme("System")}
        />
      </View>
    </View>
  );
}
