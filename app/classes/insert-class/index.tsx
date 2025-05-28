import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { IconClock } from "@tabler/icons-react-native";
import StandardLink from "@/shared/components/StandardLink";
import StandartdTextInput from "@/shared/components/StandartTextInput";

const daysOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default function InsertClass() {
  const [selectedDay, setSelectedDay] = useState("Lunes");
  const [showDayModal, setShowDayModal] = useState(false);
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");

  // Helper to validate hh:mm format
  const handleTimeInput = (text: string, setter: (value: string) => void) => {
    if (/^([01]?\d|2[0-3]):?([0-5]?\d)?$/.test(text) || text === "") {
      setter(text);
    }
  };

  return (
    <View className="flex-1 justify-between bg-[#f8f8ff] px-[25] py-[5vh] dark:bg-dark">
      <View className="items-center">
        <View className="mt-[100px] w-full">
          <Text className="text-xl font-bold dark:text-light">Materia</Text>
          <StandartdTextInput placeholder="Título de la tarea" />

          <Text className="text-xl font-bold dark:text-light">Docente</Text>
          <StandartdTextInput placeholder="Nombre del docente" />
        </View>

        <View className="w-full flex-row justify-between gap-x-4 mt-4">
          <View className="flex-1">
            <Text className="mb-2 text-xl font-bold dark:text-light">
              Color
            </Text>
            <TouchableOpacity className="h-[50px] rounded-[10px] border border-[#e0e0e0] bg-[#51b15f]" />
          </View>
          <View className="flex-1">
            <Text className="mb-2 text-xl font-bold dark:text-light">
              Emoji
            </Text>
            <TouchableOpacity className="h-[50px] items-center justify-center rounded-[10px] border border-[#e0e0e0]">
              <Text className="text-2xl">🧑‍💻</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full mt-4">
          <Text className="mb-2 text-xl font-bold dark:text-light">
            Horario
          </Text>

          <TextInput
            className="h-[50px] rounded-t-[10px] border border-[#e0e0e0] bg-[#faf8fb] p-3"
            placeholder="Salón donde se imparte la clase"
            placeholderTextColor="#cacaca"
          />

          <View className="flex-row">
            <TouchableOpacity
              onPress={() => setShowDayModal(true)}
              className="h-[101px] flex-1 justify-center rounded-bl-[10px] border border-[#e0e0e0] bg-[#faf8fb] p-3"
            >
              <Text className="text-base">{selectedDay} ⬇️</Text>
            </TouchableOpacity>

            <View className="flex-1">
              <View className="flex-row">
                <TextInput
                  className="h-[50px] flex-1 border border-[#e0e0e0] bg-[#faf8fb] p-3"
                  placeholder="De: (hh:mm)"
                  value={timeStart}
                  onChangeText={(text) => handleTimeInput(text, setTimeStart)}
                  maxLength={5}
                />
                <View className="h-[50px] flex-[0.4] items-center justify-center bg-[#000080]">
                  <IconClock color="white" />
                </View>
              </View>

              <View className="flex-row">
                <TextInput
                  className="h-[50px] flex-1 border border-[#e0e0e0] bg-[#faf8fb] p-3"
                  placeholder="a: (hh:mm)"
                  value={timeEnd}
                  onChangeText={(text) => handleTimeInput(text, setTimeEnd)}
                  maxLength={5}
                />
                <View className="h-[50px] flex-[0.4] items-center justify-center bg-[#000080]">
                  <IconClock color="white" />
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity className="mt-[10px] aspect-square w-[15%] justify-center self-end rounded-full bg-[#00008099]">
            <Text className="text-center text-4xl font-medium text-[white]">
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <StandardLink href="" buttonText="Añadir" opaque={true} />

      {/* Day Modal */}
      <Modal visible={showDayModal} transparent animationType="slide">
        <View className="flex-1 items-center justify-center bg-black/40">
          <View className="w-[80%] rounded-lg bg-white p-4">
            {daysOfWeek.map((day) => (
              <TouchableOpacity
                key={day}
                className="p-3"
                onPress={() => {
                  setSelectedDay(day);
                  setShowDayModal(false);
                }}
              >
                <Text className="text-lg">{day}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}
