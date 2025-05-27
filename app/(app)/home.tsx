import Progress from "@/features/home/components/progress";
import Subject from "@/shared/components/subject";
import Task from "@/shared/components/task";
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, ScrollView, StatusBar, Text } from "react-native";
import { View } from "react-native";

const tasks = [
  {
    title: "Realizar operaciones booleanas",
    subject: "Matemáticas Computacionales",
    id: "1235",
    dueDate: "02/04/25, 9:30 a.m",
    color: "#656BFF",
    icon: "🚀",
  },
  {
    title: "Realizar diagrama de flujo",
    subject: "Introducción a la programación",
    id: "1234",
    dueDate: "02/04/25, 9:30 a.m",
    color: "#9058FF",
    icon: "🧑‍💻",
  },
];

const subjects = [
  {
    title: "Matematicas Computacionales",
    color: "#656BFF",
    icon: "📚",
    startTime: "02/04/25, 9:30 a.m",
    classroom: "A-101",
    progress: 50,
  },
  {
    title: "Introducción a la programación",
    color: "#9058FF",
    icon: "💻",
    startTime: "02/04/25, 9:30 a.m",
    classroom: "B-202",
    progress: 75,
  },
  {
    title: "Algebra Lineal",
    color: "#FF656B",
    icon: "📐",
    startTime: "02/04/25, 9:30 a.m",
    classroom: "C-303",
    progress: 25,
  },
  {
    title: "Cálculo",
    color: "#FF9058",
    icon: "🧮",
    startTime: "02/04/25, 9:30 a.m",
    classroom: "D-404",
    progress: 100,
  },
  {
    title: "Química",
    color: "#FF9058",
    icon: "🧪",
    startTime: "02/04/25, 9:30 a.m",
    classroom: "E-505",
    progress: 0,
  },
  {
    title: "Física",
    color: "#FF9058",
    icon: "🧑‍🔬",
    startTime: "02/04/25, 9:30 a.m",
    classroom: "F-606",
    progress: 0,
  },
  {
    title: "Biología",
    color: "#FF9058",
    icon: "🧑‍🔬",
    startTime: "02/04/25, 9:30 a.m",
    classroom: "G-707",
    progress: 0,
  },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <View className="h-screen gap-2 bg-light">
      <StatusBar backgroundColor="#f8f8ff" />
      <Progress />
      <View>
        <Text className="mb-2 text-lg font-bold"> {t("home.inProgressHeader")}</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              title={item.title}
              subject={item.subject}
              id={item.id}
              dueDate={item.dueDate}
              color={item.color}
              icon={item.icon}
              home
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="h-[44vh]">
        <Text className="mb-2 text-lg font-bold">{t("home.dailySubjectsHeader")}</Text>
        <FlatList
          data={subjects}
          renderItem={({ item }) => (
            <Subject
              icon={item.icon}
              color={item.color}
              name={item.title}
              startTime={item.startTime}
              classroom={item.classroom}
              progress={item.progress}
            />
          )}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
