import Button from "@/shared/components/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function Progress() {
  const { t } = useTranslation();

  return (
    <View className="h-40 flex-row items-center justify-between rounded-2xl bg-primary px-4 py-6">
      <View className="h-full w-3/5 items-start justify-between">
        <Text className="tetx-lg text-white">{t("home.allTasksComplete")}</Text>
        <Button
          small
          title="Ver tareas"
          className="rounded-xl bg-light px-4 py-2"
          onPress={() => {}}
          link="/tasks"
        >
          <Text className="font-bold text-primary">
            {t("home.viewTasksBtn")}
          </Text>
        </Button>
      </View>
      <ProgressCircle
        percentage={100}
        radius={48}
        textClassname="text-light text-3xl font-semibold"
        strokeWidth={7}
        borderColor="#f8f8ff"
      />
    </View>
  );
}

export function ProgressCircle({
  percentage,
  radius,
  textClassname,
  strokeWidth,
  borderColor,
}: {
  percentage: number;
  radius: number;
  textClassname: string;
  strokeWidth: number;
  borderColor: string;
}) {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View className="items-center justify-center">
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          stroke={borderColor + "80"}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={borderColor}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={radius}
          originY={radius}
        />
      </Svg>
      <View className="absolute items-center justify-center">
        <Text className={textClassname}>{percentage}%</Text>
      </View>
    </View>
  );
}
