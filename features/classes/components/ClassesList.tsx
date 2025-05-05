import { View, Text, Image, FlatList } from "react-native"

type ClassItems = {
    id: string,
    subject: string
};
  
  type ClassesListProps = {
    classData: ClassItems[];
};

const ClassesList = ({ classData }: ClassesListProps) => {
    return(
        <FlatList
            data={classData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View>
                    <Text>{item.subject}</Text>
                </View>
            )}
        />
    );
}

export default ClassesList;