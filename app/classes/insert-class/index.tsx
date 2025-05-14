import Customization from "@/features/classes/insert-class/components/Customization";
import NameAndTeacher from "@/features/classes/insert-class/components/NameAndTeacher";
import SchedulePicker from "@/features/classes/insert-class/components/ScheduleSection";
import StandardLink from "@/shared/components/StandardLink";
import { View } from "react-native";

export default function InsertClass() {
  return (
    <View className="flex-1 justify-between bg-[#f8f8ff] py-[5vh]">
      <View className="items-center">
        <NameAndTeacher />
        <Customization />
        <SchedulePicker />
      </View>

      <StandardLink href="" buttonText="Añadir" opaque={true} />
    </View>
  );
}
