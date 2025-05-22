import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import UserCard from "../../features/settings/components/user-card";

export default function SettingsScreen() {
  const router = useRouter();
  const userImage = require("../../assets/gatito_persa.png");

  return (
    <View className="flex-1 bg-gray-50 px-8">
      {/* Título */}
      <Text className="mb-6 text-2xl font-bold text-gray-900">
        Notificaciones
      </Text>

      {/* Tarjeta de Usuario */}
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Opciones de Configuración */}
      <View className="shadow-xs mb-4">
        {/* Opción 1 */}
        <View className="mb-4 rounded-lg bg-white px-3 py-2">
          <TouchableOpacity
            className="flex-row items-center bg-white p-4"
            onPress={() => {}}
          >
            <Ionicons name="notifications-outline" size={20} className="mr-3" />
            <View>
              <Text className="text-base">Notificaciones automatizadas</Text>
              <Text className="mr-7 text-sm text-gray-500">
                Las notificaciones se basan en la técnica de repetición
                espaciada
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Opción 2 */}
        <View className="shadow-xs mb-4">
          <TouchableOpacity
            className="flex-row items-center rounded-lg bg-white p-4"
            onPress={() => {}}
          >
            <Ionicons name="notifications-outline" size={20} className=" ml-3" />
            <View>
              <Text className="text-base, ml-3">Notificaciones manuales</Text>
              <Text className="text-sm text-gray-500 ml-3 w-full">
                Ingresa el intervalo deseado
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
