import SchedulePickerTask from "@/features/edit-add-task/components/SchedulePickerTask";
import DescriptionAreaTask from "@/features/edit-add-task/components/DescriptionAreaTask";
import TitleClassTask from "@/features/edit-add-task/components/TitleClassTask";
import StandardLink from "@/shared/components/StandardLink";
import { View } from "react-native";

export default function EditAddTask() {
  return (
    <View className="flex-1 justify-between bg-[#f8f8ff] pb-6">
      <View className="items-center">
        <TitleClassTask />
        <SchedulePickerTask />
        <DescriptionAreaTask />
      </View>

      <StandardLink href="" buttonText="Listo" opaque={true} />
    </View>
  );
}
