import { useAuth } from "@/shared/hooks/use-auth";
import { View, Text, Image } from "react-native";

export default function UserCard() {
  const { user } = useAuth();

  return (
    <View className="mb-4 flex-row items-center rounded-xl bg-white p-4 dark:bg-[#212121]">
      {user?.picutre ? (
        <Image
          source={user.picture}
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
    </View>
  );
}
