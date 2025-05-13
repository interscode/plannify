import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";

export default function App() {
  verifyInstallation();
  return (
    <View className="flex flex-1 items-center justify-center px-8">
      <View className="mb-6 flex flex-col gap-5">
        <View className="flex flex-row items-center justify-between gap-5">
          <View className="-mb-10 -mr-10">
            <IconChalkboard size={35} color="#000080" />
          </View>
          <IconDeviceLaptop size={35} color="#000080" />
          <View className="-mb-10 -ml-10">
            <IconBackpack size={35} color="#000080" />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between gap-5">
          <View className="-ml-5">
            <IconBooks size={35} color="#000080" />
          </View>
          <Logo />
          <View className="-mr-5">
            <IconPencil size={35} color="#000080" />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between gap-5">
          <View className="-mr-10 -mt-10">
            <IconChecklist size={35} color="#000080" />
          </View>
          <IconBellSchool size={35} color="#000080" />
          <View className="-ml-10 -mt-10">
            <IconNotebook size={35} color="#000080" />
          </View>
        </View>
      </View>
      <Text className="mb-2 text-3xl font-bold">Plannify</Text>
      <Text className="w-3/5 text-center text-lg ">
        Tu aliado escolar en la palma de tu mano.
      </Text>
      <Pressable className="flex h-12 w-full flex-row items-center justify-center gap-2 rounded-lg bg-primary">
        <Text className="text-xl font-bold text-white">Comenzar</Text>
        <IconLogin2 size={25} color="#fff" />
      </Pressable>
    </View>
  );
}
