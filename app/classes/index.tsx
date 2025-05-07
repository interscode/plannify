import AddClassButton from "@/features/classes/components/AddClassButton";
import ClassesList from "@/features/classes/components/ClassesList";
import EmptyClassesPlaceHolder from "@/features/classes/components/EmptyClassesPlaceHolder";
import { View, Text, TouchableOpacity } from "react-native";

type ClassItems = {
  id: string;
  subject: string;
  teacher: string;
  classroom: string;
};

type ClassesProps = {
  ClassData: ClassItems[];
};

export default function Classes({ ClassData }: ClassesProps) {
  // Este ClassData será eliminado en cuanto se desarrolle el funcionamiento
  ClassData = [];

  return (
    <View className="h-full bg-[#f8f8ff]">
      {/* <Header text={"Materias"}/> */}

      {ClassData.length > 0 ? (
        <ClassesList classData={ClassData} />
      ) : (
        <EmptyClassesPlaceHolder />
      )}

      <AddClassButton />
    </View>
  );
}
