import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Scan() {
  return (
    <View className="flex w-full flex-1 bg-[#F8F8FF] py-[5vh]">
      <View className="mb-auto items-center">
        <Image
          source={require("../../assets/icon-light.png")}
          className="h-[100] w-[100] rounded-[25]"
        />
        <Text className="mt-10 text-3xl font-bold">Escanea tu horario</Text>
        <Text className="text-center text-lg">
          Transforma tu horario escolar con facilidad. Solo toma una foto o sube
          una imagen, y nosotros haremos el resto
        </Text>
      </View>

      <View className="items-center gap-2">
        <Pressable className="w-full items-center rounded-lg border border-[#000080]">
          <Text className="p-4 text-xl font-semibold color-[#000080]">
            Seleccionar imagen
          </Text>
        </Pressable>
        <Link href="" asChild>
          <Pressable className="w-full items-center rounded-lg bg-[#000080]">
            <Text className="p-4 text-xl font-semibold color-[#FFFFFF]">
              Escanear
            </Text>
          </Pressable>
        </Link>
        <Link
          href=""
          className="mt-4 text-lg text-[#C0C0C0] underline"
        >
          Omitir
        </Link>
      </View>
    </View>
  );
}
