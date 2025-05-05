import ClassesList from "@/features/classes/components/ClassesList";
import EmptyClassesPlaceHolder from "@/features/classes/components/EmptyClassesPlaceHolder";
import { View, Text } from "react-native";

type ClassItems = {
    id: string,
    subject: string
};

type ClassesProps = {
    ClassData : ClassItems[];
}

export default function Classes({ ClassData } : ClassesProps) {

    ClassData = [];

    return(
        <View>
            {/* <Header text={"Materias"}/> */}

            {ClassData.length > 0 ?
                <ClassesList classData={ClassData}/>
                :
                <EmptyClassesPlaceHolder/>
            }
        </View>
    );
}