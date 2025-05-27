import { View, Text, TouchableOpacity } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import { IconBrandWindows, IconBrandAndroid } from "@tabler/icons-react-native";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SettingsScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1" style={{ paddingHorizontal: 25 }}>
      {/* Tarjeta de usuario */}
      <UserCard />

      {/* Botón de sincronización */}
      <View
        className="mb-4 mt-4 overflow-hidden rounded-xl p-4"
        style={{ backgroundColor: "#000080", borderWidth: 1 }}
      >
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => console.log("Sincronización")}
        >
          <Text className="text-base font-medium" style={{ color: "#F8F8FF" }}>
            {t("sync.linkDevice")}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sección de dispositivos */}
      <View className="mb-4 mt-4 overflow-hidden rounded-xl">
        <Text className="text-base font-bold dark:text-light">
          {" "}
          {t("sync.devicesTitle")}{" "}
        </Text>
        <Text className="mb-2 text-base font-normal dark:text-light">
          {t("sync.deviceLogoutHint")}
        </Text>

        {/* Lista de dispositivos */}
        <View className="mb-4 mt-2 gap-y-4 overflow-hidden">
          <View className="rounded-lg bg-white dark:bg-[#212121]">
            <SettingsButton
              icon={IconBrandWindows}
              title="Windows"
              subtitle="Última vez activo 12 de febrero, 5:30 p.m."
              isLast
            />
          </View>
          <View className="rounded-lg bg-white dark:bg-[#212121]">
            <SettingsButton
              icon={IconBrandAndroid}
              title="Android"
              subtitle="Última vez activo 12 de febrero, 5:30 p.m."
              isLast
            />
          </View>
        </View>
      </View>
    </View>
  );
}
