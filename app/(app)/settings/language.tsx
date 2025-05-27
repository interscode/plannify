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
      <View className="mb-4 rounded-lg bg-white dark:bg-[#212121]">
        <SettingsButton icon="ES" title="Español" />
        <SettingsButton icon="EN" title="Ingles" isLast />
      </View>
    </View>
  );
}
