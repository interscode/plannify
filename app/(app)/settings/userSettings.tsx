import UserCardComponent from "@/features/settings/components/user-card";
import { useAuth } from "@/shared/hooks/use-auth";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function UserCard() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/settings/profile")}
      activeOpacity={0.8}
      className="mb-4 flex-row items-center rounded-xl bg-white p-4 dark:bg-[#212121]"
    >
      {user?.picture ? (
        <Image
          source={{ uri: user.picture }}
          className="mr-4 h-12 w-12 rounded-full"
          resizeMode="cover"
        />
      ) : (
        <View className="size-12 items-center justify-center rounded-xl bg-primary">
          <Text className="text-2xl font-bold text-white">
            {user?.name?.charAt(0).toUpperCase()}
          </Text>
        </View>
      )}

      <View className="ml-2">
        <Text className="text-base font-semibold text-black dark:text-light">
          {user?.name}
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          {user?.identities
            ? JSON.parse(user?.identities)[0]?.providerName
            : "Email"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
