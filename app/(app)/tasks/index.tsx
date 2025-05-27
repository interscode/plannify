import { View, Text, Pressable, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

export default function TaskInProgress() {
  const { t } = useTranslation();

  return (
    <View className="flex w-full">
      <ScrollView horizontal>
        <View className="flex w-full flex-row">
          <Pressable className="mr-2 flex-1 items-center rounded-xl bg-[#000080] p-2">
            <Text className="text-base font-semibold text-white">
              {t("tasks.progressHeader")}
            </Text>
          </Pressable>
          <Pressable className="mr-2 flex-1 items-center rounded-xl bg-[#0000801A] p-2">
            <Text className="text-base font-semibold text-[#000080] dark:text-light">
              {t("tasks.lateCategory")}
            </Text>
          </Pressable>
          <Pressable className="flex-1 items-center rounded-xl bg-[#0000801A] p-2">
            <Text className="text-base font-semibold text-[#000080] dark:text-light">
              {t("tasks.doneCategory")}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
