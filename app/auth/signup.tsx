import { GoogleLogo } from "@/shared/components/google-logo";
import Logo from "@/shared/components/logo";
import { IconEye, IconEyeOff } from "@tabler/icons-react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, TextInput, View } from "react-native";
import { useTheme } from "@/shared/hooks/use-theme";

export default function App() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useTheme();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View className="flex flex-1 items-center justify-center px-8 py-[5vh]">
      <Logo theme={theme} />
      <Text className="mb-2 mt-10 text-3xl font-bold dark:text-light">
        {t("registerScreen.title")}
      </Text>
      <Text className="mb-auto text-center text-lg dark:text-light">
        {t("registerScreen.subtitle")}
      </Text>
      <Text className="mb-2 w-full text-start font-bold dark:text-light">
        {t("registerScreen.registerWithEmail")}
      </Text>
      <Text className="w-full text-start dark:text-light">
        {t("registerScreen.nameLabel")}
      </Text>
      <TextInput
        className="mb-2 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
        placeholder={t("registerScreen.namePlaceholder")}
        placeholderTextColor={"#a0a0a0"}
        onChangeText={setName}
      />
      <Text className="w-full text-start dark:text-light">
        {t("registerScreen.emailLabel")}
      </Text>
      <TextInput
        className="mb-2 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
        placeholder={t("registerScreen.emailPlaceholder")}
        placeholderTextColor={"#a0a0a0"}
        onChangeText={setEmail}
      />
      <Text className="w-full text-start dark:text-light">
        {t("registerScreen.passwordLabel")}
      </Text>
      <View className="mb-4 flex w-full flex-row items-center">
        <TextInput
          className="h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
          placeholder={t("registerScreen.passwordPlaceholder")}
          placeholderTextColor={"#a0a0a0"}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <Pressable className="-ml-10" onPress={toggleShowPassword}>
          {showPassword ? <IconEye /> : <IconEyeOff />}
        </Pressable>
      </View>
      <Pressable className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary">
        <Text className="text-xl font-bold text-light">
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
        <Text className="text-xl font-bold">
          {t("registerScreen.continueWithGoogle")}
        </Text>
      </Pressable>
      <Link href="/auth/signin" className="dark:text-light">
        {t("registerScreen.alreadyHaveAccount")}{" "}
        <Text className="font-bold text-primary dark:text-light">
          {" "}
          {t("registerScreen.goToLogin")}
        </Text>
      </Link>
      <Link href="/">Welcome</Link>
     <Link href="/scan">Scan</Link>
    </View>
  );
}
