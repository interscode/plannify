import { Link } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, Pressable, Text, View } from "react-native";

export default function ScannedSchedule() {
  const { t, i18n } = useTranslation();
  return (
    <View className="flex w-full flex-1 bg-[#F8F8FF] py-[5vh]">
      <View className="mb-auto items-center">
        <Image
          source={require("../../assets/icon-light.png")}
          className="h-[100] w-[100] rounded-[25]"
        />
        <Text className="mt-10 text-3xl font-bold">
          {t("scan.scheduleReadyTitle")}
        </Text>
        <Text className="text-center text-lg">
          {t("scan.scheduleReadySubtitle")}
        </Text>

        <View className="mt-20 h-60 w-full items-center justify-center rounded-[10px] border-2 border-[#000080]">
          <Text>Aquí va el horario </Text>
        </View>
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
