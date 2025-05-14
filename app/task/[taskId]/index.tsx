import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

const ejemploTarea = {
  materia: "Big Data",
  nombre: "Tarea 1",
  fechaEntrega: "2023-10-20",
  descripcion:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export default function TaskId() {
  return (
    <View className="flex h-full w-full bg-[#F8F8FF] py-[5vh]">
      <View className="mb-auto flex w-full">
        <Text className="text-lg font-medium">{ejemploTarea.materia}</Text>
        <Text className="mt-5 text-3xl font-bold">{ejemploTarea.nombre}</Text>
        <Text className="mt-3 text-lg font-medium text-[#150DF780]">
          {ejemploTarea.fechaEntrega}
        </Text>
        <Text className="mt-3 text-lg font-medium tracking-widest">
          {ejemploTarea.descripcion}
        </Text>
      </View>

      <Link href="/scan/scanned-schedule" asChild>
        <Pressable className="w-full items-center rounded-lg bg-[#000080]">
          <Text className="p-4 text-xl font-semibold color-[#FFFFFF]">
            Marcar como completada
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
