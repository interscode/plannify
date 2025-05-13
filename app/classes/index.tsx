import ClassesList from "@/features/classes/components/ClassesList";
import EmptyClassesPlaceHolder from "@/features/classes/components/EmptyClassesPlaceHolder";
import StandardLink from "@/shared/components/StandardLink";
import { View } from "react-native";

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
  ClassData = [
    /*{id: "kji121", subject: "¡Matemáticas hijo!", teacher: "Gilberto", classroom: "V0"}*/
  ];

  return (
    <View className="h-full bg-[#f8f8ff] py-[5vh]">
      {/* <Header text={"Materias"}/> */}

      {ClassData.length > 0 ? (
        <ClassesList classData={ClassData} />
      ) : (
        <EmptyClassesPlaceHolder />
      )}

      <StandardLink
        href="classes/insert-class/"
        buttonText="Agregar Materia"
        opaque={false}
      />
    </View>
  );
}
