import { Link } from "expo-router";
import { useRef, useState } from "react";
import { Image, Pressable, Text, View, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
     Alert.alert(
      "Permiso necesario",
      "Necesitamos permiso para acceder a tu cámara para escanear tu horario.",
      [
        {
          text: "Negar",
          style: "cancel",
        },
        {
          text: "Dar permiso",
          onPress: requestPermission,
        },
      ]
    );
    return null;
  }
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const camera = cameraRef.current as any;
        const photo = await camera.takePictureAsync();
        console.log("Foto tomada:", photo);
        setIsCameraActive(false);
      } catch (error) {
        console.error("Error al tomar la foto:", error);
      }
    }
  };

  const handleScanPress = () => {
    setIsCameraActive(true);
  };

  if (isCameraActive) {
    return (
      <View className="flex-1 items-center justify-center">
        <CameraView
          ref={cameraRef}
          style={{ flex: 1, width: "90%", borderRadius: 10 }}
        />
        <View className="bottom-0 w-full items-center bg-white p-4">
          <Pressable
            className="mb-2 w-full rounded-lg bg-[#000080] p-4"
            onPress={takePicture}
          >
            <Text className="text-center text-xl font-semibold text-white">
              Tomar foto
            </Text>
          </Pressable>
          <Pressable
            className="w-full rounded-lg border border-[#000080] bg-white p-4"
            onPress={() => setIsCameraActive(false)}
          >
            <Text className="text-center text-xl font-semibold text-[#000080]">
              Cerrar Cámara
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View className="flex w-full flex-1 bg-[#F8F8FF] py-[5vh]">
      <View className="mb-auto items-center">
        <Image
          source={require("../../assets/icon-light.png")}
          className="h-[100] w-[100] rounded-[25]"
        />
        <Text className="mt-10 text-3xl font-bold">Escanea tu horario</Text>
        <Text className="text-center text-lg">
          Transforma tu horario escolar con facilidad. Solo toma una foto o sube
          una imagen, y nosotros haremos el resto
        </Text>
      </View>

      <View className="items-center gap-2">
        <Pressable className="w-full items-center rounded-lg border border-[#000080]">
          <Text className="p-4 text-xl font-semibold color-[#000080]">
            Seleccionar imagen
          </Text>
        </Pressable>
        <Pressable
          className="w-full items-center rounded-lg bg-[#000080]"
          onPress={handleScanPress}
        >
          <Text className="p-4 text-xl font-semibold color-[#FFFFFF]">
            Escanear
          </Text>
        </Pressable>
        <Link href="" className="mt-4 text-lg text-[#C0C0C0] underline">
          Omitir
        </Link>
      </View>
    </View>
  );
}
