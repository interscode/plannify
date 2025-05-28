import { useAuth } from "@/shared/hooks/use-auth";
import { useUpdateProfile } from "@/shared/hooks/use-update-profile";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

export default function EditProfileForm() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();
  const { updateName, updateEmail, changePassword, actionLoading } = useUpdateProfile();
  const [form, setForm] = React.useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    oldPassword: "",
  });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (form.name !== user?.name) {
        await updateName(form.name);
      }
      if (form.email !== user?.email) {
        await updateEmail(form.email);
      }
      if (form.password) {
        if (!form.oldPassword) {
          throw new Error("Current password required to change password.");
        }
        await changePassword(form.oldPassword, form.password);
      }
      Alert.alert("Success", "Profile updated!");
      router.back?.();
    } catch (e: any) {
      Alert.alert("Error", e.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>

      <Text className="dark:text-white mb-4 text-2xl font-bold">
        Edit Profile
      </Text>

      <Text className="dark:text-white mb-2 mt-4">{t("settings.name")}</Text>

      <TextInput
        value={form.name}
        onChangeText={(text) => handleChange("name", text)}
        placeholder="Your name"
        className="h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
      />

      <Text className="dark:text-white mb-2 mt-4">{t("settings.email")}</Text>

      <TextInput
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
        placeholder="Your email"
        keyboardType="email-address"
        autoCapitalize="none"
        className="h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
      />
      
      <Text className="dark:text-white mb-2 mt-4">{t("settings.currentPassword")}</Text>

      <TextInput
        value={form.oldPassword}
        onChangeText={(text) => handleChange("oldPassword", text)}
        placeholder="Current password"
        secureTextEntry
        className="h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
      />

      <Text className="dark:text-white mb-2 mt-4">{t("settings.newPassword")}</Text>

      <TextInput
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
        placeholder="New password"
        secureTextEntry
        className="h-12 w-full rounded-lg border border-[#e0e0e0] pl-3 dark:border-light dark:bg-light dark:text-dark"
      />

      <TouchableOpacity
        className="flex mt-20 h-12 w-full items-center justify-center gap-2 rounded-lg dark:bg-light"
        onPress={handleSubmit}
        disabled={loading}
        style={{ backgroundColor: actionLoading ? "#00008090" : "#000080" }}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            {t("settings.saveChanges")}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
