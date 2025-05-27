import { Icon, IconCheck, IconChevronRight } from "@tabler/icons-react-native";
import { Link } from "expo-router";
import { Text, View, Pressable } from "react-native";
import { useTheme } from "@/shared/hooks/use-theme";

interface SettingButtonProps {
  href?: string;
  isSubmenu?: boolean;
  icon: Icon | string;
  title: string;
  subtitle?: string;
  isLast?: boolean;
  onPress?: () => void;
  color?: string;
  selected?: boolean;
}

export function SettingsButton({
  href,
  isSubmenu,
  icon,
  title,
  subtitle,
  isLast,
  onPress,
  color,
  selected,
}: SettingButtonProps) {
  const Icon = icon;
  const { theme } = useTheme();

  if (!href) {
    return (
      <Pressable
        className="flex flex-row justify-between border-gray-100 p-4 dark:border-gray-700"
        style={{ borderBottomWidth: isLast ? 0 : 1 }}
        onPress={onPress}
      >
        <View className="flex flex-row items-center gap-3">
          {typeof icon === "string" ? (
            <Text className="text-xl font-bold dark:text-light">{icon}</Text>
          ) : (
            <Icon
              size={25}
              color={color ? color : theme === "light" ? "#0a0a0a" : "#f8f8ff"}
            />
          )}
          <View>
            <Text
              className="font-semibold"
              style={{
                color: color
                  ? color
                  : theme === "light"
                    ? "#0a0a0a"
                    : "#f8f8ff",
              }}
            >
              {title}
            </Text>
            {subtitle && (
              <Text className="w-[60%] text-balance text-sm dark:text-light">
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        {selected && (
          <IconCheck
            color={color ? color : theme === "light" ? "#0a0a0a" : "#f8f8ff"}
          />
        )}
        {isSubmenu && (
          <IconChevronRight
            color={color ? color : theme === "light" ? "#0a0a0a" : "#f8f8ff"}
          />
        )}
      </Pressable>
    );
  }

  return (
    <Link href={href} asChild>
      <Pressable
        className="flex flex-row justify-between border-gray-100 p-4 dark:border-gray-700"
        style={{ borderBottomWidth: isLast ? 0 : 1 }}
      >
        <View className="flex flex-row items-center gap-3">
          {typeof icon === "string" ? (
            <Text className="text-xl font-bold dark:text-light">{icon}</Text>
          ) : (
            <Icon
              size={25}
              color={color ? color : theme === "light" ? "#0a0a0a" : "#f8f8ff"}
            />
          )}
          <View>
            <Text
              className="font-semibold"
              style={{
                color: color
                  ? color
                  : theme === "light"
                    ? "#0a0a0a"
                    : "#f8f8ff",
              }}
            >
              {title}
            </Text>
            {subtitle && <Text className="dark:text-light">{subtitle}</Text>}
          </View>
        </View>
        {selected && (
          <IconCheck
            color={color ? color : theme === "light" ? "#0a0a0a" : "#f8f8ff"}
          />
        )}
        {isSubmenu && (
          <IconChevronRight
            color={color ? color : theme === "light" ? "#0a0a0a" : "#f8f8ff"}
          />
        )}
      </Pressable>
    </Link>
  );
}
