import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import UserCard from "../../features/settings/components/UserCard";

export default function SettingsScreen() {
  const router = useRouter();
  const userImage = require("../../assets/gatito_persa.png");
  return (
    <View className="flex-1 bg-gray-50 px-8">
      {/* Título */}
      <Text className="mb-6 text-2xl font-bold text-gray-900">Tema</Text>

      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={require("../../assets/gatito_persa.png")}
      />

      {/* Opciones de Configuración */}
      <View className="shadow-xs mb-4 rounded-xl">
        <View className="mb-4 bg-white px-3 py-2 rounded-lg">
        <TouchableOpacity
          className="flex-row items-center p-4"
          onPress={() => {}}
        >
          <Ionicons
            name="sunny-outline"
            size={25}
            color="#000"
            className="mr-3"
          />
          <Text className="w-full text-base">Claro</Text>
        </TouchableOpacity>
        </View>
        
        <View className="bg-white px-3 py-2 rounded-lg">
        <TouchableOpacity className="flex-row items-center p-4" onPress={() => {}}>
          <Ionicons
            name="moon-outline"
            size={25}
            color="#000"
            className="mr-3"
          />
          <Text className="w-full text-base">Oscuro</Text>
          <Text className="text-sm text-gray-500"></Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}
