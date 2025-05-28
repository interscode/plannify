import { GoogleLogo } from "@/shared/components/google-logo";
import Logo from "@/shared/components/logo";
import { useAuth } from "@/shared/hooks/use-auth";
import { useTheme } from "@/shared/hooks/use-theme";
import { IconEye, IconEyeOff } from "@tabler/icons-react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useTranslation } from "react-i18next";
import React from "react";

export default function Signin() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithEmail, actionLoading, signInWithGoogle } = useAuth();
  const { t } = useTranslation();

  const handleSignIn = async () => {
    if (!email || !password) {
      return;
    }

    try {
      await signInWithEmail(email, password);
    } catch (error) {
      setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View className="flex flex-1 items-center justify-center px-8 py-[5vh]">
      <Logo theme={theme} />
      <Text className="mb-2 mt-10 text-3xl font-bold dark:text-light">
        {t("loginScreen.title")}
      </Text>
      <Text className="mb-10 text-center text-lg dark:text-light">
        {t("loginScreen.subtitle")}
      </Text>
      <Text className="mb-2 w-full text-start font-bold dark:text-light">
        {t("loginScreen.loginWithEmail")}
      </Text>
      <Text className="w-full text-start dark:text-light">
        {t("loginScreen.emailLabel")}
      </Text>
      <TextInput
        className="mb-2 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
        placeholder={t("loginScreen.emailPlaceholder")}
        placeholderTextColor={"#a0a0a0"}
        onChangeText={setEmail}
        textContentType="emailAddress"
        autoCapitalize="none"
      />
      <Text className="w-full text-start dark:text-light">
        {t("loginScreen.passwordLabel")}
      </Text>
      <View className="mb-4 flex w-full flex-row items-center">
        <TextInput
          className="h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
          placeholder={t("loginScreen.passwordPlaceholder")}
          placeholderTextColor={"#a0a0a0"}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <Pressable className="-ml-10" onPress={toggleShowPassword}>
          {showPassword ? <IconEye /> : <IconEyeOff />}
        </Pressable>
      </View>
      {error && (
        <Text className="mb-2 text-red-500 dark:text-red-400">{error}</Text>
      )}
      <Pressable
        className="flex h-12 w-full items-center justify-center gap-2 rounded-lg dark:bg-light"
        onPress={handleSignIn}
        style={{ backgroundColor: actionLoading ? "#00008090" : "#000080" }}
      >
        <Text className="text-xl font-bold text-light">
          {actionLoading ? "Cargando..." : t("loginScreen.continueWithEmail")}
        </Text>
      </Pressable>
      <View className="my-4 flex w-full flex-row items-center justify-between">
        <View className="h-[1px] w-[45%] bg-[#e0e0e0]" />
        <Text className="mx-2 text-[#c0c0c0]">{t("loginScreen.or")}</Text>
        <View className="h-[1px] w-[45%] bg-[#e0e0e0]" />
      </View>
      <Pressable
        onPress={signInWithGoogle}
        className="mb-2 flex h-12 w-full flex-row items-center justify-center gap-2 rounded-lg border border-[#e0e0e0] bg-white"
      >
        <GoogleLogo />
        <Text className="text-xl font-bold">
          {t("loginScreen.continueWithGoogle")}
        </Text>
      </Pressable>
      <Link href="/auth/signup" className="dark:text-light">
        {t("loginScreen.noAccountPrompt") + " "}
        <Text className="font-bold text-primary dark:text-light">
          {t("loginScreen.goToRegister")}
        </Text>
      </Link>
      <Link href="/home">Home</Link>
      <Link href="/scan">Scan</Link>
    </View>
  );
}
