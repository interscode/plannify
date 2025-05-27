import { ProgressCircle } from "@/features/home/components/progress";
import { Text, View } from "react-native";
import { useTheme } from "../hooks/use-theme";

interface SubjectProps {
  icon?: string;
  color: string;
  name: string;
  startTime: string;
  classroom: string;
  progress?: number;
}

export default function Subject({
  icon,
  color,
  name,
  startTime,
  classroom,
  progress,
}: SubjectProps) {
  const { theme } = useTheme();

  return (
    <View
      className={`mb-2 flex w-full flex-row items-center justify-between p-2 ${icon ? "rounded-xl border border-[#f0f0f0] dark:border-[#212121]" : ""}`}
      style={{
        backgroundColor: icon
          ? theme === "light"
            ? "#fff"
            : "#212121"
          : color,
      }}
    >
      <View className="flex flex-row gap-2">
        {icon && (
          <View
            className="flex size-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: color }}
          >
            <Text className="text-xl">{icon}</Text>
          </View>
        )}
        <View>
          <Text className="text-sm font-bold dark:text-light">{name}</Text>
          <Text className="text-xs text-[#7e7e7e] dark:text-light">
            {startTime} - {classroom}
          </Text>
        </View>
      </View>
      {progress && (
        <ProgressCircle
          percentage={progress}
          radius={20}
          strokeWidth={4}
          textClassname="text-black text-sm dark:text-white"
          borderColor={color}
        />
      )}
    </View>
  );
}
