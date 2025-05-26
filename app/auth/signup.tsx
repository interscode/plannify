import { GoogleLogo } from "@/shared/components/google-logo";
import Logo from "@/shared/components/logo";
import { Link } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, TextInput, View } from "react-native";

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <View className="flex flex-1 items-center justify-center px-8 py-[5vh]">
      <Logo />
      <Text className="mb-2 mt-10 text-3xl font-bold">{t("registerScreen.title")}</Text>
      <Text className="mb-auto text-center text-lg">{t("registerScreen.subtitle")}</Text>
      <Text className="mb-2 w-full text-start font-bold">
       {t("registerScreen.registerWithEmail")}
      </Text>
      <Text className="w-full text-start">{t("registerScreen.nameLabel")}</Text>
      <TextInput
        className="mb-2 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3"
        placeholder={t("registerScreen.namePlaceholder")}
      />
      <Text className="w-full text-start">{t("registerScreen.emailLabel")}</Text>
      <TextInput
        className="mb-2 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3"
        placeholder={t("registerScreen.emailPlaceholder")}
      />
      <Text className="w-full text-start">{t("registerScreen.passwordLabel")}</Text>
      <TextInput
        className="mb-4 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3"
        placeholder={t("registerScreen.passwordPlaceholder")}
      />
      <Pressable className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary">
        <Text className="text-xl font-bold text-white">
          {t("registerScreen.continueWithEmail")}
        </Text>
      </Pressable>
      <View className="my-4 flex w-full flex-row items-center justify-between">
        <View className="h-[1px] w-[45%] bg-[#e0e0e0]" />
        <Text className="mx-2 text-[#c0c0c0]">{t("registerScreen.or")}</Text>
        <View className="h-[1px] w-[45%] bg-[#e0e0e0]" />
      </View>
      <Pressable className="mb-2 flex h-12 w-full flex-row items-center justify-center gap-2 rounded-lg border border-[#e0e0e0] bg-white">
        <GoogleLogo />
        <Text className="text-xl font-bold">{t("registerScreen.continueWithGoogle")}</Text>
      </Pressable>
      <Link href="/auth/signin">
        {t("registerScreen.alreadyHaveAccount")}{" "}
        <Text className="font-bold text-primary"> {t("registerScreen.goToLogin")}</Text>
      </Link>
      <Link href="/">Welcome</Link>
    </View>
  );
}
