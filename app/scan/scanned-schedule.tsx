import { Link } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import ScheduleClass from "@/shared/components/schedule-class";
import { useTheme } from "@/shared/hooks/use-theme";
import Logo from "@/shared/components/logo";

export default function ScannedSchedule() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const scheduleData = [
    {
      materia: "INTELIGENCIA ARTIFICIAL",
      profesor: "MUNOZ MANDUJANO MARTIN",
      horarios: {
        MAR: { hora: "15-17", aula: "D09" },
        JUE: { hora: "15-17", aula: "D09" },
      },
    },
    {
      materia: "SERVICIOS CLOUD",
      profesor: "ESTEVEZ SERRATO CESAR",
      horarios: {
        MAR: { hora: "17-19", aula: "D04" },
        JUE: { hora: "17-19", aula: "A07" },
      },
    },
    {
      materia: "APLICACIONES DE BIG DATA",
      profesor: "MONDRAGON HUERTA RAQUEL",
      horarios: {
        LUN: { hora: "13-15", aula: "A21" },
        MIE: { hora: "13-15", aula: "D08" },
      },
    },
    {
      materia: "DESARROLLO DE APLICACIONES MÓVILES",
      profesor: "ZAVALETA DURAN ADRIAN RENE",
      horarios: {
        LUN: { hora: "15-17", aula: "D09" },
        MIE: { hora: "15-17", aula: "D09" },
      },
    }
  ];

  return (
    <View className="flex w-full flex-1 bg-[#F8F8FF] py-[5vh] dark:bg-dark">
      <View className="mb-auto items-center">
        <Logo theme={theme} />
        <Text className="mt-10 text-3xl font-bold dark:text-light">
          {t("scan.scheduleReadyTitle")}
        </Text>
        <Text className="text-center text-lg dark:text-light">
          {t("scan.scheduleReadySubtitle")}
        </Text>

        <FlatList
          className="w-full mt-20 h-60 rounded-[10px] border border-[4px] border-[#000080] p-2"
          data={scheduleData}
          renderItem={({ item }) => {
            const scheduleLines = Object.entries(item.horarios)
              .map(([day, { hora, aula }]) => `${day}: ${hora} (${aula})`)
              .join(" | ");

            return (
              <ScheduleClass
                subjectName={item.materia}
                teacherName={item.profesor}
                scheduleTime={scheduleLines}
                classroom="" // Optional if you're including aula in each line
                color="#ffb3b3"
                icon="🔥"
              />
            );
          }}
        />
      </View>

      <Link href=" " asChild>
        <Pressable className="w-full items-center justify-center rounded-lg bg-[#000080]">
          <Text className="p-4 text-xl font-semibold text-[#FFFFFF]">
            {t("scan.readyButton")}
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
