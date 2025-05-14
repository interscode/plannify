import { View, Text, Image } from "react-native";

type UserCardProps = {
  name: string;
  provider: string;
  imageSource: any;
};

export default function UserCard({
  name,
  provider,
  imageSource,
}: UserCardProps) {
  return (
    <View className="mb-4 flex-row items-center rounded-xl bg-white p-4">
      <Image
        source={imageSource}
        className="mr-4 h-12 w-12 rounded-full"
        resizeMode="cover"
      />
      <View>
        <Text className="text-base font-semibold text-black">{name}</Text>
        <Text className="text-sm text-gray-500">{provider}</Text>
      </View>
    </View>
  );
}
