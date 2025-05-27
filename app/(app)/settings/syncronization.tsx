import { View, Text, TouchableOpacity } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import { IconBrandWindows, IconBrandAndroid } from "@tabler/icons-react-native";

export default function SettingsScreen() {
  const userImage = require("../../../assets/gatito_persa.png");

  return (
    <View className="flex-1">
      {/* Tarjeta de usuario */}
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Botón de sincronización */}
      <View
        className="overflow-hidden rounded-xl p-4"
        style={{ backgroundColor: "#000080", borderWidth: 1 }}
      >
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => console.log("Sincronización")}
        >
          <Text className="text-base font-medium" style={{ color: "#F8F8FF" }}>
            Vincular un dispositivo
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sección de dispositivos */}
      <View className="mb-4 mt-4 overflow-hidden rounded-xl">
        <Text className="text-base font-bold dark:text-light">
          Dispositivos
        </Text>
        <Text className="mb-2 text-base font-normal dark:text-light">
          Toca un dispositivo para cerrar la sesión
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
