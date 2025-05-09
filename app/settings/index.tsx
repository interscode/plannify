import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import UserCard from "../../features/settings/components/UserCard";

export default function SettingsScreen() {
  const router = useRouter();
  const userImage = require("../../assets/gatito_persa.png");

  return (
    <View className="flex-1 bg-gray-50 px-8">
      {/* Título */}
      <Text className="mb-6 text-2xl font-bold text-gray-900">
        Configuración
      </Text>

      {/* Tarjeta de usuario */}
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Opciones de Configuración */}
      <View className="mb-4 overflow-hidden rounded-xl bg-white">
        <TouchableOpacity
          className="flex-row items-center border-b border-gray-100 p-4"
          onPress={() => router.push("/settings/notification")}
        >
          <Ionicons
            name="notifications-outline"
            size={25}
            color="#000"
            className="mr-3"
          />
          <Text className="w-full text-base text-gray-800">Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center border-b border-gray-100 p-4"
          onPress={() => router.push("/settings/language")}
        >
          <Ionicons
            name="language-outline"
            size={25}
            color="#000"
            className="mr-3"
          />
          <Text className="w-full text-base text-gray-800">Idioma</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center p-4"
          onPress={() => router.push("/settings/theme")}
        >
          <Ionicons
            name="color-palette-outline"
            size={25}
            color="#000"
            className="mr-3"
          />
          <Text className="w-full text-base text-gray-800">Tema</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de sincronización */}
      <View className="mb-4 mt-4 overflow-hidden rounded-xl bg-white p-4">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => router.push("/settings/syncronization")}
        >
          <Ionicons
            name="sync-outline"
            size={25}
            color="#000080"
            className="mr-3"
          />
          <Text className="text-base font-medium" style={{ color: "#000080" }}>
            Sincronización
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botón de Cerrar Sesión */}
      <View className="mb-4 mt-2 overflow-hidden rounded-xl bg-white p-4">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => console.log("Cerrar sesión")}
        >
          <Ionicons
            name="log-out-outline"
            size={25}
            color="#FF2C2C"
            className="mr-3"
          />
          <Text className="text-base font-medium" style={{ color: "#FF2C2C" }}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
