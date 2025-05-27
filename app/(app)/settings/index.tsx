import { View } from "react-native";
import UserCard from "@/features/settings/components/user-card";
import {
  IconBell,
  IconLanguage,
  IconLogout,
  IconPalette,
  IconRefresh,
} from "@tabler/icons-react-native";
import { SettingsButton } from "@/features/settings/components/settings-button";
import { useThemeStore } from "@/shared/hooks/use-theme";
import { useAuth } from "@/shared/hooks/use-auth";

export default function Settings() {
  const theme = useThemeStore((state) => state.resolvedTheme);
  const { signOutUser } = useAuth();

  return (
    <View className="flex-1">
      {/* Tarjeta de usuario */}
      <UserCard />

      {/* Opciones de Configuración */}
      <View className="mb-4 overflow-hidden rounded-lg border-gray-100 bg-white dark:border-gray-600 dark:bg-[#212121]">
        <SettingsButton
          icon={IconBell}
          title="Notificaciones"
          isSubmenu
          href="/settings/notification"
        />
        <SettingsButton
          icon={IconLanguage}
          title="Idioma"
          isSubmenu
          href="/settings/language"
        />
        <SettingsButton
          icon={IconPalette}
          title="Tema"
          isSubmenu
          isLast
          href="/settings/theme"
        />
      </View>

      {/* Botón de sincronización */}
      <View className="mb-4 mt-4 overflow-hidden rounded-lg bg-white dark:border-gray-600 dark:bg-[#212121]">
        <SettingsButton
          icon={IconRefresh}
          title="Sincronización"
          color={theme === "light" ? "#000080" : "#f8f8ff"}
          isLast
          href="/settings/syncronization"
        />
      </View>

      {/* Botón de Cerrar Sesión */}
      <View className="mb-4 mt-2 overflow-hidden rounded-lg bg-white dark:border-gray-600 dark:bg-[#212121]">
        <SettingsButton
          icon={IconLogout}
          title="Cerrar sesión"
          color="#ff2c2c"
          isLast
          onPress={signOutUser}
        />
      </View>
    </View>
  );
}
