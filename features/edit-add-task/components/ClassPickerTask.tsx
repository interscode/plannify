import { View, Text, TextInput, TouchableOpacity } from "react-native";

const ClassPickerTask = () => {
    return(
        <View className="w-[80%]">
            <Text className="font-bold text-lg mb-2">Entrega</Text>

            <View className="mb-2 flex-row justify-between gap-x-4">
                <View className="flex-1 flex-row">
                    <TextInput className="flex-1 border border-[#e0e0e0] rounded-l-[10] pl-3" placeholderTextColor="#cacaca" placeholder="dd/mm/aaaa"/>
                    <TouchableOpacity className="h-[50] flex-[0.4] rounded-r-[10] bg-[#000080]">
                        <Text className="text-center align-middle text-[30px] font-semibold text-[white]">▢</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-1 flex-row">
                    <TextInput className="flex-1 border border-[#e0e0e0] rounded-l-[10] pl-3" placeholderTextColor="#cacaca" placeholder="hh:mm"/>
                    <TouchableOpacity className="h-[50] flex-[0.4] rounded-r-[10] bg-[#000080]">
                        <Text className="text-center align-middle text-[30px] font-semibold text-[white]">○</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ClassPickerTask;