import { View, Text, TextInput } from "react-native";

const DescriptionAreaTask = () => {
    return(
        <View className="w-[80%]">
            <Text className="font-bold text-lg mb-2">Descripción</Text>
            <TextInput className="border border-[#e0e0e0] rounded-[10] px-3 h-[300] align-top" placeholderTextColor="#cacaca" placeholder="Agrega una descripción"/>
        </View>
    );
}

export default DescriptionAreaTask;