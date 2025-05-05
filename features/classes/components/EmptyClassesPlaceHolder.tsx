import { View, Text, Image, TouchableOpacity } from "react-native"

const EmptyClassesPlaceHolder = () => {
    return(
        <View className="items-center justify-center h-full">
            <Text>Aún no has añadido materias</Text>
            <Image className="w-1/2 h-1/2" source={require('@/assets/logo-light-gray.png')}/>
            <TouchableOpacity>
                <Text>Añadir materia</Text>
            </TouchableOpacity>
        </View>
    );
}

export default EmptyClassesPlaceHolder;