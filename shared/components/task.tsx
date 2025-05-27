import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface TaskProps {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  color: string;
  home?: boolean;
  icon: string;
}

export default function Task({
  id,
  title,
  subject,
  dueDate,
  color,
  home,
  icon,
}: TaskProps) {
  if (home) {
    return (
      <Link href={"/tasks/" + id} asChild>
        <Pressable
          className="mr-2 h-32 w-72 justify-between rounded-xl p-4"
          style={{ backgroundColor: color + "a0" }}
        >
          <View className="flex flex-row justify-between">
            <Text className="w-2/3 text-sm dark:text-light">{subject}</Text>
            <View
              className="flex size-5 items-center justify-center rounded"
              style={{ backgroundColor: color }}
            >
              <Text className="text-xs">{icon}</Text>
            </View>
          </View>
          <Text className="w-2/3 font-bold dark:text-light">{title}</Text>
        </Pressable>
      </Link>
    );
  }

  return (
    <Link href={"/tasks/" + id}>
      <Pressable></Pressable>
    </Link>
  );
}
