import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import UserCard from "@/features/settings/components/user-card";
import {
  IconBell,
  IconChevronRight,
  IconLanguage,
  IconLogout,
  IconPalette,
  IconRefresh,
} from "@tabler/icons-react-native";
import { SettingsButton } from "@/features/settings/components/settings-button";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const userImage = require("../../../assets/gatito_persa.png");

  return (
    <View className="flex-1">
      {/* Tarjeta de usuario */}
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Opciones de Configuración */}
      <View className="mb-4 overflow-hidden rounded-lg border border-gray-100 bg-white">
        <SettingsButton
          icon={IconBell}
          title={t("settings.optNotifications")}
          isSubmenu
          href="/settings/notification"
        />
        <SettingsButton
          icon={IconLanguage}
          title={t("settings.optLanguage")}
          isSubmenu
          href="/settings/language"
        />
        <SettingsButton
          icon={IconPalette}
          title={t("settings.optTheme")}
          isSubmenu
          isLast
          href="/settings/theme"
        />
      </View>

      {/* Botón de sincronización */}
      <View className="mb-4 mt-4 overflow-hidden rounded-lg bg-white">
        <SettingsButton
          icon={IconRefresh}
          title={t("settings.optSync")}
          color="#000080"
          isLast
          href="/settings/syncronization"
        />
      </View>

      {/* Botón de Cerrar Sesión */}
      <View className="mb-4 mt-2 overflow-hidden rounded-lg bg-white">
        <SettingsButton
          icon={IconLogout}
          title={t("settings.optLogout")}
          color="#ff2c2c"
          isLast
        />
      </View>
    </View>
  );
}
