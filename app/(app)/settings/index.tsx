import { View } from "react-native";
import UserCard from "./userSettings";
import {
  IconBell,
  IconLanguage,
  IconLogout,
  IconPalette,
  IconRefresh,
} from "@tabler/icons-react-native";
import { SettingsButton } from "@/features/settings/components/settings-button";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/shared/hooks/use-theme";
import { useAuth } from "@/shared/hooks/use-auth";
import { Link } from "expo-router";

export default function Settings() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { signOutUser } = useAuth();

  return (
    <View className="flex-1" style={{ paddingHorizontal: 25 }}>
      {/* Tarjeta de usuario */}
      <UserCard />

      {/* Opciones de Configuración */}
      <View className="mb-4 overflow-hidden rounded-lg bg-white dark:border-gray-600 dark:bg-[#212121]">
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
      <View className="mb-4 mt-4 overflow-hidden rounded-lg bg-white dark:border-gray-600 dark:bg-[#212121]">
        <SettingsButton
          icon={IconRefresh}
          title={t("settings.optSync")}
          color={theme === "light" ? "#000080" : "#f8f8ff"}
          isLast
          href="/settings/syncronization"
          isSubmenu
        />
      </View>

      {/* Botón de Cerrar Sesión */}
      <View className="mb-4 mt-2 overflow-hidden rounded-lg bg-white dark:border-gray-600 dark:bg-[#212121]">
        <SettingsButton
          icon={IconLogout}
          title={t("settings.optLogout")}
          color="#ff2c2c"
          isLast
          onPress={signOutUser}
        />
      </View>
      <Link href="/auth/callback" className="text-center text-blue-500">
        Callback
      </Link>
    </View>
  );
}
