import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-start bg-gray-100 pt-14">
      
      {/* Título */}
      <View className="w-[85%] mb-5">
        <Text className="text-2xl font-bold text-black">Configuración</Text>
      </View>

      {/* Usuario */}
      <View className="w-[85%] bg-white rounded-xl p-4 mb-3 shadow-md">
        <Text className="text-lg font-bold text-black">Mike Balderas</Text>
        <Text className="text-base text-black">Google</Text>
        {/* <Image source={require('../assets/gatito_persa.png')} className="w-24 h-24 rounded-full mt-3" /> */}
      </View>

      {/* Opciones */}
      <View className="w-[85%] bg-white rounded-xl p-4 mb-3 shadow-md">
        <Text className="text-base font-medium text-black py-1">Notificaciones</Text>
        <Text className="text-base font-medium text-black py-1">Idioma</Text>
        <Text className="text-base font-medium text-black py-1">Tema</Text>
      </View>

      {/* Sincronización */}
      <View className="w-[85%] bg-white rounded-xl p-4 mb-3 shadow-md">
        <Text className="text-base font-semibold text-blue-700">Sincronización</Text>
      </View>

      {/* Cerrar sesión */}
      <View className="w-[85%] bg-white rounded-xl p-4 mb-3 shadow-md">
        <Text className="text-base font-semibold text-red-600">Cerrar sesión</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
