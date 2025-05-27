import { View } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import { IconDevices, IconMoon, IconSun } from "@tabler/icons-react-native";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  return (
    <View className="flex-1">
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={require("../../../assets/gatito_persa.png")}
      />

      {/* Opciones de Configuración */}
      <View className="shadow-xs mb-4 rounded-xl">
        <View className="mb-4 rounded-lg bg-white">
          <SettingsButton icon={IconSun} title= {t("theme.lightTheme")} isLast />
        </View>

        <View className="mb-4 rounded-lg bg-white">
          <SettingsButton icon={IconMoon} title= {t("theme.darkTheme")} isLast />
        </View>

        <View className="rounded-lg bg-white">
          <SettingsButton icon={IconDevices} title={t("theme.systemTheme")} isLast />
        </View>
      </View>
    </View>
  );
}
