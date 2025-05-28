import Progress from "@/features/home/components/progress";
import Subject from "@/shared/components/subject";
import Task from "@/shared/components/task";
import { useTheme } from "@/shared/hooks/use-theme";
import { FlatList, StatusBar, Text } from "react-native";
import { View } from "react-native";
import { useTasks } from "@/features/tasks/hooks/use-tasks";
import { useSubjects } from "@/features/schedule/hooks/use-subjects";
import { IconListCheck } from "@tabler/icons-react-native";
import React from "react";

export default function Home() {
  const { theme } = useTheme();
  const { tasks } = useTasks();
  const { subjects } = useSubjects();

  const getBackgroundColor = () => {
    switch (theme) {
      case "light":
        return "#f8f8ff";
      case "dark":
        return "#0a0a0a";
      default:
        return "#f8f8ff";
    }
  };

  return (
    <View className="h-screen gap-2" style={{ paddingHorizontal: 25 }}>
      <StatusBar
        backgroundColor={getBackgroundColor()}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />
      <Progress />
      <View>
        <Text className="mb-2 text-lg font-bold dark:text-light">
          En progreso
        </Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              title={item.name}
              subject={item.subject.name}
              id={item.task_id}
              dueDate={item.due_date}
              color={item.subject.color}
              icon={item.subject.emoji}
              home
            />
          )}
          keyExtractor={(item) => item.task_id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {tasks.length === 0 && (
          <View className="flex h-32 items-center justify-center">
            <IconListCheck color="#aaa" size={50} strokeWidth={1.5} />
            <Text className="text-center text-gray-500 dark:text-light">
              No tienes tareas en progreso
            </Text>
          </View>
        )}
      </View>
      <View className="h-[44vh]">
        <Text className="mb-2 text-lg font-bold dark:text-light">
          Materias del dia
        </Text>
        {subjects.length === 0 && (
          <View className="flex items-center justify-center">
            <Text className="text-center text-gray-500 dark:text-light">
              No tienes materias para hoy
            </Text>
          </View>
        )}
        <FlatList
          data={subjects}
          renderItem={({ item }) => (
            <Subject
              color={item.color}
              icon={item.emoji}
              name={item.name}
              startTime={item.start_time}
              classroom={item.classroom}
              progress={item.progress}
            />
          )}
          keyExtractor={(item) => item.subject_id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
