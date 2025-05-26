import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import React from "react";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // Escucha cambios de idioma en tiempo real
  useEffect(() => {
    console.log("📢 Idioma actual:", i18n.language);

    const updateLang = (lng: string) => {
      setCurrentLang(lng);
      console.log("📢 Idioma actualizado:", lng);
    };

    i18n.on("languageChanged", updateLang);
    return () => i18n.off("languageChanged", updateLang);
  }, []);

  // Cambia el idioma con confirmación visual
  const changeLanguage = async (lang: "es" | "en") => {
    await i18n.changeLanguage(lang);
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="mb-6 text-2xl font-bold">
        {t("language.languageTitle")}
      </Text>

      {/* Botón Español */}
      <TouchableOpacity
        onPress={() => changeLanguage("es")}
        className={`mb-4 rounded-lg p-4 ${currentLang === "es" ? "bg-blue-100" : "bg-white"}`}
      >
        <View className="flex-row items-center">
          <Text className="w-10 text-2xl">ES</Text>
          <Text
            className={`text-base ${currentLang === "es" ? "font-bold text-blue-600" : ""}`}
          >
            {t("language.languageOptionES")}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Botón Inglés */}
      <TouchableOpacity
        onPress={() => changeLanguage("en")}
        className={`rounded-lg p-4 ${currentLang === "en" ? "bg-blue-100" : "bg-white"}`}
      >
        <View className="flex-row items-center">
          <Text className="w-10 text-2xl">EN</Text>
          <Text
            className={`text-base ${currentLang === "en" ? "font-bold text-blue-600" : ""}`}
          >
            {t("language.languageOptionEN")}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
