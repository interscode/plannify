import AddButton from "@/features/insert-class/components/AddButton";
import Customization from "@/features/insert-class/components/Customization";
import NameAndTeacher from "@/features/insert-class/components/NameAndTeacher";
import SchedulePicker from "@/features/insert-class/components/ScheduleSection";
import { View } from "react-native";

export default function InsertClass() {
    return (
        <View className="flex-1 bg-[#f8f8ff] pb-6 justify-between">
            <View className="items-center">
                <NameAndTeacher />
                <Customization />
                <SchedulePicker />
            </View>

            <AddButton />
        </View>
    );
}
