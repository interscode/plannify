import { View } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import { IconDevices, IconMoon, IconSun } from "@tabler/icons-react-native";

export default function SettingsScreen() {
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
          <SettingsButton icon={IconSun} title="Claro" isLast />
        </View>

        <View className="mb-4 rounded-lg bg-white">
          <SettingsButton icon={IconMoon} title="Oscuro" isLast />
        </View>

        <View className="rounded-lg bg-white">
          <SettingsButton icon={IconDevices} title="Sistema" isLast />
        </View>
      </View>
    </View>
  );
}
