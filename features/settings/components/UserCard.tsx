import { View, Text, Image } from 'react-native';

type UserCardProps = {
  name: string;
  provider: string;
  imageSource: any;
};

export default function UserCard({ name, provider, imageSource }: UserCardProps) {
  return (
    <View className="flex-row items-center bg-white p-4 rounded-xl mb-4">
      <Image
        source={imageSource}
        className="w-12 h-12 rounded-full mr-4"
        resizeMode="cover"
      />
      <View>
        <Text className="text-base font-semibold text-black">{name}</Text>
        <Text className="text-sm text-gray-500">{provider}</Text>
      </View>
    </View>
  );
}
