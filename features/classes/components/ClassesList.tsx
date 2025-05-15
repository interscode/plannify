import StandardLink from "@/shared/components/StandardLink";
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
        className="w-full pt-[50]"
        data={classData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="rounded-[15px] bg-[#51B15F] p-[14px]">
            <View className="-mb-2 flex-row items-start justify-between">
              <View />
              <TouchableOpacity>
                <Text className="text-xs font-bold text-white">✕</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xl font-semibold text-[#ffffff]">
                  {item.subject}
                </Text>
                <Text className="text-base text-[#ffffff]">{item.teacher}</Text>
                <Text className="text-base font-medium text-[#ffffff]">
                  {item.classroom}
                </Text>
              </View>
              <Text className="mr-[10px] rounded-[5px] bg-[#656BFF] p-[1px] text-lg">
                📚
              </Text>
            </View>
          </View>
        )}
      />

      <StandardLink href="" buttonText="Listo" opaque={true} />
    </View>
  );
};

export default ClassesList;
