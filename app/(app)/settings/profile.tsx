import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/shared/hooks/use-auth";
import EditProfileForm from "@/features/settings/components/edit-profile-form";
import React from "react";

export default function ProfileSettingsScreen() {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <ScrollView className="bg-background flex-1 px-4 pt-6">
      <Text className="mb-6 text-2xl font-bold text-black dark:text-white">
        {t("settings.profile")}
      </Text>

      {!user && <EditProfileForm />}

      {!user && (
        <View className="h-96 items-center justify-center">
          <Text className="text-center text-3xl text-gray-500 dark:text-gray-400">
            {t("settings.notLoggedIn")}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
