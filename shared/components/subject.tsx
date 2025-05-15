import { ProgressCircle } from "@/features/home/components/progress";
import { Text } from "react-native";
import { View } from "react-native";

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
  return (
    <View
      className={`mb-2 flex w-full flex-row items-center justify-between p-2 ${icon ? "rounded-xl border border-[#f0f0f0]" : ""}`}
      style={{ backgroundColor: icon ? "#fff" : color }}
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
          <Text className="text-sm font-bold">{name}</Text>
          <Text className="text-xs text-[#7e7e7e]">
            {startTime} - {classroom}
          </Text>
        </View>
      </View>
      {progress && (
        <ProgressCircle
          percentage={progress}
          radius={20}
          strokeWidth={4}
          textClassname="text-black text-sm"
          borderColor={color}
        />
      )}
    </View>
  );
}
