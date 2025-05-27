import { View } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import {
  IconBellBolt,
  IconBellCog,
  IconBellX,
} from "@tabler/icons-react-native";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1" style={{ paddingHorizontal: 25 }}>
      {/* Tarjeta de Usuario */}
      <UserCard />

      {/* Opciones de Configuración */}
      <View className="mb-4">
        {/* Opción 1 */}
        <View className="mb-4 rounded-lg bg-white dark:bg-[#212121]">
          <SettingsButton
            icon={IconBellBolt}
            title={t("notifications.autoNotificationsLabel")}
            subtitle={t("notifications.autoNotificationsDesc")}
            isLast
          />
        </View>

        {/* Opción 2 */}
        <View className="mb-4 rounded-lg bg-white dark:bg-[#212121]">
          <SettingsButton
            icon={IconBellCog}
            title={t("notifications.manualNotificationsLabel")}
            subtitle={t("notifications.manualNotificationsDesc")}
            isLast
          />
        </View>

        {/* Opción 2 */}
        <View className="mb-4 rounded-lg bg-white dark:bg-[#212121]">
          <SettingsButton
            icon={IconBellX}
            title={t("notifications.deactivatedNotificationsLabel")}
            subtitle={t("notifications.deactivatedNotificationsDesc")}
            isLast
          />
        </View>
      </View>
    </View>
  );
}
