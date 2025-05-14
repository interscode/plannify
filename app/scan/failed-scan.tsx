import { Image, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Failed() {
  return (
    <View className="flex w-full flex-1 bg-[#F8F8FF] py-[5vh]">
      <View className="mb-auto items-center">
        <Image
          source={require("../../assets/icon-light.png")}
          className="h-[100] w-[100] rounded-[25]"
          resizeMode="contain"
        />
        <Text className="mt-10 text-3xl font-bold">Escaneo fallido</Text>
        <Text className="mt-2 text-center text-lg">
          ¿Ingresar datos manualmente?
        </Text>
      </View>

      <View className="gap-2">
        <Link href="  " asChild>
          <Pressable className="w-full items-center rounded-lg bg-[#000080]">
            <Text className="p-4 text-xl font-semibold color-[#FFFFFF]">
              Sí, continuar
            </Text>
          </Pressable>
        </Link>

        <Link href="/scan" asChild>
          <Pressable className="w-full items-center rounded-lg border border-[#000080]">
            <Text className="p-4 text-xl font-semibold text-[#000080]">
              Volver a intentar
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
