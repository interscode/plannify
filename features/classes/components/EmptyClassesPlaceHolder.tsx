import { View, Text, Image, TouchableOpacity } from "react-native"

const EmptyClassesPlaceHolder = () => {
    return(
        <View className="flex-1 items-center">
            <Text className="pt-5 text-[#C0C0C0] font-semibold">Aún no has añadido materias</Text>
            <View className="flex-1 justify-center">
                <Image source={require('@/assets/logo-light-gray.png')} />
            </View>
        </View>
    );
}

export default EmptyClassesPlaceHolder;