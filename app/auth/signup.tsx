import { GoogleLogo } from "@/shared/components/google-logo";
import Logo from "@/shared/components/logo";
import { Link } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-1 items-center justify-center px-8 py-[5vh]">
      <Logo />
      <Text className="mb-2 mt-10 text-3xl font-bold">Registrate</Text>
      <Text className="mb-auto text-center text-lg">Empieza gratis</Text>
      <Text className="mb-2 w-full text-start font-bold">
        Empezar con correo
      </Text>
      <Text className="w-full text-start">Nombre</Text>
      <TextInput
        className="mb-2 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3"
        placeholder="Ingresa tu nombre..."
      />
      <Text className="w-full text-start">Correo</Text>
      <TextInput
        className="mb-2 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3"
        placeholder="Ingresa tu correo..."
      />
      <Text className="w-full text-start">Contraseña</Text>
      <TextInput
        className="mb-4 h-12 w-full rounded-lg border border-[#e0e0e0] pl-3"
        placeholder="Ingresa una contraseña..."
      />
      <Pressable className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary">
        <Text className="text-xl font-bold text-white">
          Continuar con correo
        </Text>
      </Pressable>
      <View className="my-4 flex w-full flex-row items-center justify-between">
        <View className="h-[1px] w-[45%] bg-[#e0e0e0]" />
        <Text className="mx-2 text-[#c0c0c0]">o</Text>
        <View className="h-[1px] w-[45%] bg-[#e0e0e0]" />
      </View>
      <Pressable className="mb-2 flex h-12 w-full flex-row items-center justify-center gap-2 rounded-lg border border-[#e0e0e0] bg-white">
        <GoogleLogo />
        <Text className="text-xl font-bold">Continuar con Google</Text>
      </Pressable>
      <Link href="/auth/signin">
        ¿Ya tienes cuenta?{" "}
        <Text className="font-bold text-primary">Inicia sesión</Text>
      </Link>
      <Link href="/">Welcome</Link>
      <Link href="/scan">Scan</Link>
    </View>
  );
}
