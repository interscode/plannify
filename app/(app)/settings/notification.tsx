import { View } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import { SettingsButton } from "@/features/settings/components/settings-button";
import {
  IconBellBolt,
  IconBellCog,
  IconBellX,
} from "@tabler/icons-react-native";

export default function SettingsScreen() {
  const userImage = require("../../../assets/gatito_persa.png");

  return (
    <View className="flex-1">
      {/* Tarjeta de Usuario */}
      <UserCard
        name="Mike Balderas"
        provider="Google"
        imageSource={userImage}
      />

      {/* Opciones de Configuración */}
      <View className="mb-4">
        {/* Opción 1 */}
        <View className="mb-4 rounded-lg bg-white dark:bg-[#212121]">
          <SettingsButton
            icon={IconBellBolt}
            title="Notificaciones automatizadas"
            subtitle="Las notificaciones se basan en la técnica de repetición espaciada"
            isLast
          />
        </View>

        {/* Opción 2 */}
        <View className="mb-4 rounded-lg bg-white dark:bg-[#212121]">
          <SettingsButton
            icon={IconBellCog}
            title="Notificaciones manuales"
            subtitle="Ingresa el intervalo en el que te envieremos las notificaciones"
            isLast
          />
        </View>

        {/* Opción 2 */}
        <View className="mb-4 rounded-lg bg-white dark:bg-[#212121]">
          <SettingsButton
            icon={IconBellX}
            title="Notificaciones desactivadas"
            subtitle="No te enviaremos ninguna notificación"
            isLast
          />
        </View>
      </View>
    </View>
  );
}
