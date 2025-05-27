import { Icon, IconChevronRight } from "@tabler/icons-react-native";
import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Pressable } from "react-native";

interface SettingButtonProps {
  href?: string;
  isSubmenu?: boolean;
  icon: Icon | string;
  title: string;
  subtitle?: string;
  isLast?: boolean;
  onPress?: () => void;
  color?: string;
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
}: SettingButtonProps) {
  const Icon = icon;

  if (!href) {
    return (
      <Pressable
        className="flex flex-row justify-between border-gray-100 p-4"
        style={{ borderBottomWidth: isLast ? 0 : 1 }}
        onPress={onPress}
      >
        <View className="flex flex-row items-center justify-start gap-3">
          {typeof icon === "string" ? (
            <Text className="text-xl font-bold">{icon}</Text>
          ) : (
            <Icon size={25} color={color ? color : "#000"} />
          )}
          <View className="w-[90%] pr-2">
            <Text
              className="font-semibold"
              style={{ color: color ? color : "#000" }}
            >
              {title}
            </Text>
            {subtitle && (
              <Text className="text-balance text-sm">{subtitle}</Text>
            )}
          </View>
        </View>
        {isSubmenu && <IconChevronRight />}
      </Pressable>
    );
  }

  return (
    <Link href={href} asChild>
      <Pressable
        className="flex flex-row justify-between border-gray-100 p-4"
        style={{ borderBottomWidth: isLast ? 0 : 1 }}
      >
        <View className="flex flex-row items-center gap-3">
          {typeof icon === "string" ? (
            <Text className="text-xl font-bold">{icon}</Text>
          ) : (
            <Icon size={25} color={color ? color : "#000"} />
          )}
          <View>
            <Text
              className="font-semibold"
              style={{ color: color ? color : "#000" }}
            >
              {title}
            </Text>
            {subtitle && <Text>{subtitle}</Text>}
          </View>
        </View>
        {isSubmenu && <IconChevronRight />}
      </Pressable>
    </Link>
  );
}
