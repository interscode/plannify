import { View, Text, TouchableOpacity } from "react-native";

const Customization = () => {
    return(
        <View className="w-[80%] flex-row justify-between gap-x-4 mb-2">
            <View className="flex-1">
                <Text className="text-[18px] font-bold">Color</Text>
                <TouchableOpacity className="h-[50] border border-[#e0e0e0] rounded-[10] bg-[#51B15F]"/>
            </View>
            <View className="flex-1">
                <Text className="text-[18px] font-bold">Emoji</Text>
                <TouchableOpacity className="h-[50] border border-[#e0e0e0] rounded-[10] items-center justify-center">
                    <Text className="text-[20px]">🧑‍💻</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Customization;