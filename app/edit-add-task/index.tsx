import AddEditButton from "@/features/edit-add-task/components/AddEditButton";
import ClassPickerTask from "@/features/edit-add-task/components/ClassPickerTask";
import DescriptionAreaTask from "@/features/edit-add-task/components/DescriptionAreaTask";
import TitleClassTask from "@/features/edit-add-task/components/TitleClassTask";
import { View } from "react-native";

export default function EditAddTask() {
    return(
        <View className="flex-1 justify-between bg-[#f8f8ff] pb-6">   
            <View className="items-center">
                <TitleClassTask/>
                <ClassPickerTask/>
                <DescriptionAreaTask/>
            </View>

            <AddEditButton/>
        </View>
    );
}