import { View, Text, Image, FlatList, TouchableOpacity } from "react-native"

type ClassItems = {
    id: string,
    subject: string,
    teacher: string,
    classroom: string
};
  
  type ClassesListProps = {
    classData: ClassItems[];
};

const ClassesList = ({ classData }: ClassesListProps) => {
    return(
        <View className="flex-1 items-center justify-between">
            <FlatList
                className="w-[80%] pt-[50]"
                data={classData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="rounded-[15] bg-[#51B15F] pt-[6px] pb-[14px] pl-[14px] pr-[10px]">
                        <View className="flex-row justify-between items-start -mb-2">
                            <View/>
                            <TouchableOpacity>
                                <Text className="text-white text-[10px] font-bold">✕</Text>
                            </TouchableOpacity>
                        </View>
                
                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className="text-[#ffffff] font-semibold text-[18px]">{item.subject}</Text>
                                <Text className="text-[#ffffff] text-[14px]">{item.teacher}</Text>
                                <Text className="text-[#ffffff] font-medium text-[14px]">{item.classroom}</Text>
                            </View>
                            <Text className="text-[15px] mr-[10px] rounded-[5px] bg-[#656BFF] p-1">📚</Text>
                        </View>
                    </View>
                )}
                
            />

            <View className="w-[80%]">
                <TouchableOpacity className="items-center rounded-[15] bg-[#000080] p-4">
                    <Text className="text-[#ffffff] font-bold text-[16px]">Listo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ClassesList;