import Logo from "@/shared/components/logo";
import { useTheme } from "@/shared/hooks/use-theme";
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
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StatusBar, Text, View } from "react-native";

export default function App() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const getIconColor = () => {
    switch (theme) {
      case "dark":
        return "#f8f8ff";
      case "light":
        return "#000080";
      default:
        return "#f8f8ff";
    }
  };

  const getBackgroundColor = () => {
    switch (theme) {
      case "dark":
        return "#0a0a0a";
      case "light":
        return "#f8f8ff";
      default:
        return "#f8f8ff";
    }
  };

  return (
    <View className="flex flex-1 items-center justify-center px-8 py-[5vh]">
      <StatusBar backgroundColor={getBackgroundColor()} />
      <View className="mb-6 flex flex-col gap-5">
        <View className="flex flex-row items-center justify-between gap-5">
          <View className="-mb-10 -mr-10">
            <IconChalkboard size={35} color={getIconColor()} />
          </View>
          <IconDeviceLaptop size={35} color={getIconColor()} />
          <View className="-mb-10 -ml-10">
            <IconBackpack size={35} color={getIconColor()} />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between gap-5">
          <View className="-ml-5">
            <IconBooks size={35} color={getIconColor()} />
          </View>
          <Logo theme={theme} />
          <View className="-mr-5">
            <IconPencil size={35} color={getIconColor()} />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between gap-5">
          <View className="-mr-10 -mt-10">
            <IconChecklist size={35} color={getIconColor()} />
          </View>
          <IconBellSchool size={35} color={getIconColor()} />
          <View className="-ml-10 -mt-10">
            <IconNotebook size={35} color={getIconColor()} />
          </View>
        </View>
      </View>
      <Text className="mb-2 text-3xl font-bold dark:text-light">Plannify</Text>
      <Text className="mb-auto w-3/5 text-center text-lg dark:text-light">
        {t("welcome.slogan")}
      </Text>
      <Link href="/auth/signup" asChild>
        <Pressable className="mb-2 flex h-12 w-full flex-row items-center justify-center gap-2 rounded-lg bg-primary">
          <Text className="text-xl font-bold text-white">
            {t("welcome.startButton")}
          </Text>
          <IconLogin2 size={25} color="#fff" />
        </Pressable>
      </Link>
      <Link href="/auth/signin" className="dark:text-light">
        {t("welcome.alreadyHaveAccount")}{" "}
        <Text className="font-bold text-primary dark:text-light">
          {t("welcome.loginLink")}
        </Text>
      </Link>
    </View>
  );
}
