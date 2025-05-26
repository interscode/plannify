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
  const { t, i18n } = useTranslation();
  const userImage = require("../../../assets/gatito_persa.png");

  return (
    <View className="flex-1">
      {/* Tarjeta de Usuario */}
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Opciones de Configuración */}
      <View className="mb-4">
        {/* Opción 1 */}
        <View className="mb-4 rounded-lg bg-white">
          <SettingsButton
            icon={IconBellBolt}
            title={t("notifications.autoNotificationsLabel")}
            subtitle={t("notifications.autoNotificationsDesc")}
          />
        </View>

        {/* Opción 2 */}
        <View className="mb-4 rounded-lg bg-white">
          <SettingsButton
            icon={IconBellCog}
            title={t("notifications.manualNotificationsLabel")}
            subtitle={t("notifications.manualNotificationsDesc")}
          />
        </View>

        {/* Opción 2 */}
        <View className="mb-4 rounded-lg bg-white">
          <SettingsButton
            icon={IconBellX}
            title={t("notifications.deactivatedNotificationsLabel")}
            subtitle= {t("notifications.deactivatedNotificationsDesc")}
          />
        </View>
      </View>
    </View>
  );
}
