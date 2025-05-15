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
      <Text className="mb-6 text-2xl font-bold text-gray-900">Sincronizac</Text>

      {/* Tarjeta de usuario */}
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

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
            Vincular un dispositivo
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sección de dispositivos */}
      <View className="mb-4 mt-4 overflow-hidden rounded-xl">
        <Text className="text-base font-bold" style={{ color: "#000080" }}>
          Dispositivos
        </Text>
        <Text
          className="mb-2 text-base font-normal"
          style={{ color: "#000080" }}
        >
          Toca un dispositivo para cerrar la sesión
        </Text>

        {/* Lista de dispositivos */}
        <View className="mb-4 mt-2 gap-y-4 overflow-hidden">
          <TouchableOpacity className="flex-row items-center rounded-lg bg-white p-4">
            <Ionicons
              name="log-out-outline"
              size={25}
              color="#000000"
              className="mr-3"
            />
            <View className="ml-3 flex-col">
              <Text
                className="text-base font-bold"
                style={{ color: "#000000" }}
              >
                Windows
              </Text>
              <Text className="text-sm font-normal text-gray-500">
                Última vez activo 12 de febrero, 5:30 p.m.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center rounded-lg bg-white p-4">
            <Ionicons
              name="log-out-outline"
              size={25}
              color="#000000"
              className="mr-3"
            />
            <View className="ml-3 flex-col">
              <Text
                className="text-base font-bold"
                style={{ color: "#000000" }}
              >
                Android
              </Text>
              <Text className="text-sm font-normal text-gray-500">
                Última vez activo 15 de marzo, 4:50 a.m.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
