import { View, Text, TouchableOpacity } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";

export default function SettingsScreen() {
  const userImage = require("../../../assets/gatito_persa.png");

  return (
    <View className="flex-1">
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Opciones de Configuración */}
      <View className="shadow-xs mb-4 rounded-xl">
        <View className="mb-4 rounded-lg bg-white">
          <SettingsButton icon="ES" title="Español" isLast />
        </View>

        <View className="rounded-lg bg-white">
          <SettingsButton icon="EN" title="Ingles" isLast />
        </View>
      </View>
    </View>
  );
}
