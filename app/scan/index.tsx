import { Link } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, Pressable, Text, View } from "react-native";

export default function Scan() {
  const { t, i18n } = useTranslation();
  return (
    <View className="flex w-full flex-1 bg-[#F8F8FF] py-[5vh]">
      <View className="mb-auto items-center">
        <Image
          source={require("../../assets/icon-light.png")}
          className="h-[100] w-[100] rounded-[25]"
        />
        <Text className="mt-10 text-3xl font-bold">{t("scan.scanTitle")}</Text>
        <Text className="text-center text-lg">
          {t("scan.scanSubtitle")}
        </Text>
      </View>

      <View className="items-center gap-2">
        <Pressable className="w-full items-center rounded-lg border border-[#000080]">
          <Text className="p-4 text-xl font-semibold color-[#000080]">
            {t("scan.selectImage")}
          </Text>
        </Pressable>
        <Link href="" asChild>
          <Pressable className="w-full items-center rounded-lg bg-[#000080]">
            <Text className="p-4 text-xl font-semibold color-[#FFFFFF]">
              {t("scan.scanButton")}
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
