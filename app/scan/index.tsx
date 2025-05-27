import { Link } from "expo-router";
import { useRef, useState, useEffect } from "react";
import { Pressable, Text, View, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useTranslation } from "react-i18next";
import Logo from "@/shared/components/logo";

export default function Scan() {
  const [permission, requestCameraPermission] = useCameraPermissions();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const cameraRef = useRef(null);
  const [scanButtonPressed, setScanButtonPressed] = useState(false);
  const [selectImagePressed, setSelectImagePressed] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const { t } = useTranslation();

  const pickImageFromGallery = async () => {
    setSelectImagePressed(true);
  };

  const handleScanPress = () => {
    setScanButtonPressed(true);
  };

  useEffect(() => {
    if (scanButtonPressed) {
      if (!permission) {
        return;
      }

      if (!permission.granted) {
        Alert.alert(
          "Permiso necesario",
          "Necesitamos permiso para acceder a tu cámara para escanear tu horario.",
          [
            {
              text: "Negar",
              style: "cancel",
              onPress: () => {
                setScanButtonPressed(false);
              },
            },
            {
              text: "Dar permiso",
              onPress: () => {
                requestCameraPermission();
                setScanButtonPressed(false);
              },
            },
          ],
        );
      } else {
        setIsCameraActive(true);
        setScanButtonPressed(false);
      }
    }
  }, [scanButtonPressed, permission]);

  useEffect(() => {
    if (selectImagePressed) {
      (async () => {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permiso necesario",
            "Necesitamos permiso para acceder a tu galería para seleccionar una imagen.",
            [
              {
                text: "Negar",
                style: "cancel",
                onPress: () => setSelectImagePressed(false),
              },
              {
                text: "Dar permiso",
                onPress: () =>
                  ImagePicker.requestMediaLibraryPermissionsAsync(),
              },
            ],
          );
          return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
        setSelectImagePressed(false);
      })();
    }
  }, [selectImagePressed]);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const camera = cameraRef.current as CameraView;
        const photo = await camera.takePictureAsync({
          shutterSound: false,
        });
        console.log("Foto tomada:", photo);
        setIsCameraActive(false);
      } catch (error) {
        console.error("Error al tomar la foto:", error);
      }
    }
  };

  if (isCameraActive) {
    return (
      <View className="flex w-full flex-1 bg-[#F8F8FF] py-[5vh]">
        <View className="mb-auto items-center">
          <Logo />
          <Text className="mt-10 text-3xl font-bold">
            {t("scan.scanTitle")}
          </Text>
          <Text className="text-center text-lg">{t("scan.scanSubtitle")}</Text>
        </View>

        <CameraView
          ref={cameraRef}
          style={{ width: "100%", height: "30%", borderRadius: 10 }}
        />
        <View className="bottom-0 w-full items-center bg-white pt-4">
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
        <Logo />
        <Text className="mt-10 text-3xl font-bold">{t("scan.scanTitle")}</Text>
        <Text className="text-center text-lg">{t("scan.scanSubtitle")}</Text>
      </View>

      <View className="items-center gap-2">
        <Pressable
          className="h-12 w-full items-center justify-center rounded-lg border border-[#000080]"
          onPress={pickImageFromGallery}
        >
          <Text className="text-xl font-semibold color-[#000080]">
            {t("scan.selectImage")}
          </Text>
        </Pressable>
        <Pressable
          className="h-12 w-full items-center justify-center rounded-lg bg-[#000080]"
          onPress={handleScanPress}
        >
          <Text className="text-xl font-semibold color-[#FFFFFF]">
            {t("scan.scanButton")}
          </Text>
        </Pressable>
        <Link href="" className="mt-2 text-lg text-[#C0C0C0] underline">
          Agregar manualmente
        </Link>
      </View>
    </View>
  );
}
