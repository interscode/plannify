import { View, Text, TouchableOpacity, TextInput } from "react-native";

const ScheduleSection = () => {
    return(
        <View className="w-[80%]">
            <Text className="text-[18px] font-bold">Horario</Text>

            <View>
                <TextInput 
                    className="h-[50] bg-[#FAF8FB] border border-[#E0E0E0] rounded-t-[10] p-3"
                    placeholderTextColor="#cacaca"
                    placeholder="Salón donde se imparte la clase"
                />
                <View className="flex-row">
                    <Text className="flex-1 h-[101] align-middle bg-[#FAF8FB] border border-[#E0E0E0] rounded-bl-[10] p-3">
                        Lunes ↕
                    </Text>
                    <View className="flex-1">
                        <View className="flex-row">
                            <TextInput 
                                className="flex-1 h-[50] bg-[#FAF8FB] border border-[#E0E0E0] p-3"
                                placeholderTextColor="#cacaca"
                                placeholder="De:"
                            />
                            <TouchableOpacity className="flex-[0.4] h-[50] bg-[#000080]">
                                <Text className="text-[30px] text-[white] font-semibold text-center align-middle">○</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row">
                            <TextInput 
                                className="flex-1 h-[50] bg-[#FAF8FB] border border-[#E0E0E0] p-3"
                                placeholderTextColor="#cacaca"
                                placeholder="a:"
                            />
                            <TouchableOpacity className="flex-[0.4] h-[50] bg-[#000080] rounded-br-[10]">
                                <Text className="text-[30px] text-[white] font-semibold text-center align-middle">○</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity className="self-end items-center justify-center bg-[#00008099] rounded-full aspect-square w-[15%] mt-[10px]">
                <Text className="text-[white] text-[30px] font-medium">+</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ScheduleSection;