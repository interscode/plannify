import { Stack } from "expo-router";
import ThemeProvider, { useTheme } from "@/shared/hooks/use-theme";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-export";
import { AuthProvider, useAuth } from "@/shared/hooks/use-auth";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useRouter } from "expo-router";
import { useAudioPlayer } from "expo-audio";
import { View } from "react-native";
import { InteractionManager } from "react-native";
import { useSchedule } from "@/features/schedule/hooks/use-schedule";
import "./global.css";
import "@/i18n";
import React from "react";

Amplify.configure(awsconfig);
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <AuthProvider>
      <ThemeProvider>
        <AuthGate fontsLoaded={fontsLoaded}>
          <StackLayout />
        </AuthGate>
      </ThemeProvider>
    </AuthProvider>
  );
}

function AuthGate({
  children,
  fontsLoaded,
}: {
  children: React.ReactNode;
  fontsLoaded: boolean;
}) {
  const { loading: authLoading, user } = useAuth();
  const router = useRouter();
  const audioStartup = require("@/assets/plannify-audio.mp3");
  const player = useAudioPlayer(audioStartup);
  const { schedule, loading: scheduleLoading } = useSchedule();

  useEffect(() => {
    if (fontsLoaded && !authLoading && !scheduleLoading) {
      if (user && !schedule) {
        router.replace("/scan");
      } else if (user && schedule) {
        router.replace("/home");
      } else {
        InteractionManager.runAfterInteractions(() => {
          player.play();
        });
      }

      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, authLoading, user]);

  if (!fontsLoaded || authLoading) return <View />;

  return <>{children}</>;
}

export function StackLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme === "light" ? "#f8f8ff" : "#0a0a0a",
        },
      }}
    >
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
