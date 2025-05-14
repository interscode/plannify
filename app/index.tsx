import Logo from "@/shared/components/logo";
import {
  IconBackpack,
  IconBellSchool,
  IconBooks,
  IconChalkboard,
  IconChecklist,
  IconDeviceLaptop,
  IconLogin2,
  IconNotebook,
  IconPencil,
} from "@tabler/icons-react-native";
import { Link } from "expo-router";
import { Pressable, StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-1 items-center justify-center px-8 py-[5vh]">
      <StatusBar backgroundColor="#f8f8ff" />
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
      <Text className="mb-auto w-3/5 text-center text-lg">
        Tu aliado escolar en la palma de tu mano.
      </Text>
      <Link href="/auth/signup" asChild>
        <Pressable className="mb-2 flex h-12 w-full flex-row items-center justify-center gap-2 rounded-lg bg-primary">
          <Text className="text-xl font-bold text-white">Comenzar</Text>
          <IconLogin2 size={25} color="#fff" />
        </Pressable>
      </Link>
      <Link href="/auth/signin">
        ¿Ya tienes cuenta?{" "}
        <Text className="font-bold text-primary">Inicia sesión</Text>
      </Link>
    </View>
  );
}
  