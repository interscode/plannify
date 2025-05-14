import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import UserCard from "../../features/settings/components/UserCard";

export default function SettingsScreen() {
  const router = useRouter();
  const userImage = require("../../assets/gatito_persa.png");

  return (
    <View className="flex-1 bg-gray-50 px-8">
      {/* Título */}
      <Text className="mb-6 text-2xl font-bold text-gray-900">Idioma</Text>

      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Opciones de Configuración */}
      <View className="shadow-xs mb-4 rounded-xl">
        <View className="mb-4 rounded-lg bg-white px-3 py-2">
          <TouchableOpacity
            className="flex-row items-center rounded-lg p-4"
            onPress={() => {}}
          >
            <View className="w-10">
              <Text className="text-2xl">ES</Text>
            </View>
            <Text className="w-full text-base">Español</Text>
          </TouchableOpacity>
        </View>

        <View className="rounded-lg bg-white px-3 py-2">
          <TouchableOpacity
            className="flex-row items-center rounded-lg p-4"
            onPress={() => {}}
          >
            <View className="w-10">
              <Text className="text-2xl">EN</Text>
            </View>
            <Text className="w-full text-base">Inglés</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
