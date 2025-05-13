import Customization from "@/features/insert-class/components/Customization";
import NameAndTeacher from "@/features/insert-class/components/NameAndTeacher";
import SchedulePicker from "@/features/insert-class/components/ScheduleSection";
import StandardLink from "@/shared/components/StandardLink";
import { View } from "react-native";

export default function InsertClass() {
  return (
    <View className="flex-1 justify-between bg-[#f8f8ff] pb-6">
      <View className="items-center">
        <NameAndTeacher />
        <Customization />
        <SchedulePicker />
      </View>

      <StandardLink href="" buttonText="Añadir" opaque={true} />
    </View>
  );
}
