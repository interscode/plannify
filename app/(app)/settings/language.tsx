import { View, Text } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();

  return (
    <View className="flex-1" style={{ paddingHorizontal: 25 }}>
      <UserCard />

      {/* Opciones de Configuración */}
      <View className="shadow-xs mb-4 rounded-xl">
        <View className="mb-4 overflow-hidden rounded-lg bg-white dark:bg-[#212121]">
          <SettingsButton
            icon="ES"
            title={t("language.languageOptionES")}
            onPress={async () => await i18n.changeLanguage("es")}
            selected={i18n.language === "es"}
          />
          <SettingsButton
            icon="EN"
            title={t("language.languageOptionEN")}
            isLast
            onPress={async () => await i18n.changeLanguage("en")}
            selected={i18n.language === "en"}
          />
        </View>
      </View>
    </View>
  );
}
