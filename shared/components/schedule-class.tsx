import React from "react";
import { Text, View, Pressable } from "react-native";
import { useTheme } from "../hooks/use-theme";
import { Link } from "expo-router";
import { IconEdit } from "@tabler/icons-react-native";

interface SubjectProps {
  icon?: string;
  color: string;
  subjectName: string;
  teacherName: string;
  scheduleTime: string;
  classroom: string;
}

export default function ScheduleClass({
  icon,
  color,
  subjectName,
  teacherName,
  scheduleTime,
}: SubjectProps) {
  const { theme } = useTheme();

  return (
    <View
      className="mb-2 flex w-full flex-row items-center justify-between rounded-xl border border-[#f0f0f0] p-2 dark:border-[#212121]"
      style={{ backgroundColor: color }}
    >
      <View className="flex flex-row gap-2">
        {icon && (
          <View
            className="items-center justify-center rounded-xl"
            style={{ width: 40, height: 40, backgroundColor: "#E0E0FF" }}
          >
            <Text className="text-xl">{icon}</Text>
          </View>
        )}
        <View>
          <Text className="text-sm font-bold dark:text-light">
            {subjectName}
          </Text>
          <Text className="font-regular mb-2 text-sm dark:text-light">
            {teacherName}
          </Text>
          <Text className="text-xs text-[#7e7e7e] dark:text-light">
            {scheduleTime}
          </Text>
        </View>
      </View>

      <Link href='/classes/insert-class' asChild>
          <Pressable>
            {
              theme === 'light' ?
              <IconEdit /> :
              <IconEdit color={'white'} /> 
            }
          </Pressable>
        </Link>
    </View>
  );
}
