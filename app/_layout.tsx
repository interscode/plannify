import { Stack } from "expo-router";
import ThemeProvider, { useTheme } from "@/shared/hooks/use-theme";
import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
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
import { View, InteractionManager } from "react-native";
import "./global.css";
import "@/i18n";

import {
  setupNotificationHandler,
  registerForPushNotificationsAsync,
  cancelAllNotifications,
  scheduleClassNotification,
  scheduleTaskNotification,
} from "@/shared/services/notifications";

import { useSubjects } from "@/features/schedule/hooks/use-subjects";
import { useTasks } from "@/features/tasks/hooks/use-tasks";

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
  const { subjects, loading: subjectsLoading } = useSubjects();
  const { tasks, loading: tasksLoading } = useTasks();
  const router = useRouter();
  const audioStartup = require("@/assets/plannify-audio.mp3");
  const player = useAudioPlayer(audioStartup);

  useEffect(() => {
    const initNotifications = async () => {
      await setupNotificationHandler();
      await registerForPushNotificationsAsync();
      await cancelAllNotifications();

      for (const subject of subjects) {
        await scheduleClassNotification(subject);
      }

      for (const task of tasks) {
        await scheduleTaskNotification(task);
      }
    };

    if (fontsLoaded && !authLoading && !subjectsLoading && !tasksLoading) {
      if (user && subjects.length === 0) {
        router.replace("/scan"); 
      } else if (user) {
        initNotifications();
        router.replace("/home");
      } else {
        InteractionManager.runAfterInteractions(() => {
          player.play();
        });
      }

      SplashScreen.hideAsync();
    }
  }, [
    fontsLoaded,
    authLoading,
    subjectsLoading,
    tasksLoading,
    subjects,
    tasks,
    user,
  ]);

  return <>{children}</>;
}

function StackLayout() {
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
