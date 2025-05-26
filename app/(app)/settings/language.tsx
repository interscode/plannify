import { View, Text, TouchableOpacity } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const userImage = require("../../../assets/gatito_persa.png");

  console.log(t("language.languageTitle"));

  return (
    <View className="flex-1">
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      <Text className="mb-6 text-2xl font-bold">
        {t("language.languageTitle")}
      </Text>

      {/* Opciones de Configuración */}
      <View className="shadow-xs mb-4 rounded-xl">
        <View className="mb-4 rounded-lg bg-white">
          <SettingsButton
            icon="ES"
            title={t("language.languageOptionES")}
            isLast
            onPress={async () => await i18n.changeLanguage("es")}
          />
        </View>

        <View className="rounded-lg bg-white">
          <SettingsButton
            icon="EN"
            title={t("language.languageOptionEN")}
            isLast
            onPress={async () => await i18n.changeLanguage("en")}
          />
        </View>
      </View>
    </View>
  );
}
