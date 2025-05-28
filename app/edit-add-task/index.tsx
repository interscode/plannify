import StandardLink from "@/shared/components/StandardLink";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import StandartdTextInput from "@/shared/components/StandartTextInput";
import { IconClock, IconCalendar } from "@tabler/icons-react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const materias = [
  { label: "INTELIGENCIA ARTIFICIAL", value: "ia" },
  { label: "SERVICIOS CLOUD", value: "cloud" },
  { label: "APLICACIONES DE BIG DATA", value: "bigdata" },
  { label: "DESARROLLO DE APLICACIONES MÓVILES", value: "mobile" },
];

const handleTimeInput = (text: string, setter: (value: string) => void) => {
  const clean = text.replace(/[^\d]/g, "");
  if (clean.length === 0) {
    setter("");
    return;
  }
  let formatted = clean;
  if (clean.length > 2) {
    formatted = clean.slice(0, 2) + ":" + clean.slice(2);
  }
  if (clean.length <= 4) {
    setter(formatted);
  }
};

const handleDateInput = (text: string, setter: (value: string) => void) => {
  const clean = text.replace(/[^\d]/g, "");
  if (clean.length === 0) {
    setter("");
    return;
  }
  let formatted = clean;
  if (clean.length > 2) {
    formatted = clean.slice(0, 2) + "/" + clean.slice(2);
  }
  if (clean.length > 4) {
    formatted = formatted.slice(0, 5) + "/" + clean.slice(4);
  }
  if (clean.length <= 8) {
    setter(formatted);
  }
};

export default function EditAddTask() {
  const [timeEnd, setTime] = useState("");
  const [dateEnd, setDate] = useState("");
  const [selectedMateria, setSelectedMateria] = useState<string | null>(null);

  return (
    <View className="flex-1 justify-between bg-[#f8f8ff] px-[25] py-[5vh] dark:bg-dark">
      <View className="items-center">
        <View className="mt-[50] w-full">
          <Text className="text-lg font-bold dark:text-light">Título</Text>
          <StandartdTextInput placeholder="Título de la tarea" />

          <Text className="mt-4 text-lg font-bold dark:text-light">
            Materia
          </Text>
          <Dropdown
            data={materias}
            labelField="label"
            valueField="value"
            placeholder="Selecciona una materia"
            value={selectedMateria}
            onChange={(item) => setSelectedMateria(item.value)}
            style={{
              height: 50,
              borderColor: "#e0e0e0",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 12,
              backgroundColor: "#faf8fb",
            }}
            placeholderStyle={{
              color: "#cacaca",
              fontSize: 14,
            }}
            selectedTextStyle={{
              color: "black",
              fontSize: 14,
            }}
            containerStyle={{
              borderRadius: 10,
            }}
            itemTextStyle={{
              fontSize: 14,
              color: "#333",
            }}
            activeColor="#e6e6fa"
          />
        </View>

        <View className="w-full">
          <Text className="mb-2 mt-4 text-lg font-bold dark:text-light">
            Entrega
          </Text>

          <View className="mb-2 flex-row justify-between gap-x-4">
            <View className="flex-1 flex-row">
              <TextInput
                className="flex-1 rounded-l-[10px] border border-[#e0e0e0] bg-[#faf8fb] pl-3 text-black"
                placeholderTextColor="#cacaca"
                placeholder="dd/mm/aaaa"
                value={dateEnd}
                onChangeText={(text) => handleDateInput(text, setDate)}
                maxLength={10}
              />
              <TouchableOpacity className="h-[50px] flex-[0.4] items-center justify-center rounded-r-[10px] bg-[#000080]">
                <IconCalendar color={"white"} />
              </TouchableOpacity>
            </View>

            <View className="flex-1 flex-row">
              <TextInput
                className="flex-1 rounded-l-[10px] border border-[#e0e0e0] bg-[#faf8fb] pl-3 text-black"
                placeholder="hh:mm"
                placeholderTextColor="#cacaca"
                value={timeEnd}
                onChangeText={(text) => handleTimeInput(text, setTime)}
                maxLength={5}
              />
              <TouchableOpacity className="h-[50px] flex-[0.4] items-center justify-center rounded-r-[10px] bg-[#000080]">
                <IconClock color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="w-full">
          <Text className="mb-2 text-lg font-bold dark:text-light">
            Descripción
          </Text>
          <TextInput
            className="h-[270px] rounded-[10px] border border-[#e0e0e0] bg-[#faf8fb] px-3 align-top text-black"
            placeholderTextColor="#cacaca"
            placeholder="Agrega una descripción"
            multiline
            textAlignVertical="top"
          />
        </View>
      </View>

      <StandardLink href="" buttonText="Listo" opaque={true} />
    </View>
  );
}
