import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

type ClassItems = {
  id: string;
  subject: string;
  teacher: string;
  classroom: string;
};

type ClassesListProps = {
  classData: ClassItems[];
};

const ClassesList = ({ classData }: ClassesListProps) => {
  return (
    <View className="flex-1 items-center justify-between">
      <FlatList
        className="w-[80%] pt-[50]"
        data={classData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="rounded-[15] bg-[#51B15F] pb-[14px] pl-[14px] pr-[10px] pt-[6px]">
            <View className="-mb-2 flex-row items-start justify-between">
              <View />
              <TouchableOpacity>
                <Text className="text-[10px] font-bold text-white">✕</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-[18px] font-semibold text-[#ffffff]">
                  {item.subject}
                </Text>
                <Text className="text-[14px] text-[#ffffff]">
                  {item.teacher}
                </Text>
                <Text className="text-[14px] font-medium text-[#ffffff]">
                  {item.classroom}
                </Text>
              </View>
              <Text className="mr-[10px] rounded-[5px] bg-[#656BFF] p-1 text-[15px]">
                📚
              </Text>
            </View>
          </View>
        )}
      />

      <View className="w-[80%]">
        <TouchableOpacity className="items-center rounded-[15] bg-[#000080] p-4">
          <Text className="text-[16px] font-bold text-[#ffffff]">Listo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClassesList;
