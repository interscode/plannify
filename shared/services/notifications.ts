import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { Subject, Task } from './types';

// Configura el manejador de notificaciones
export async function setupNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#000080', // Azul
    });
  }
}

// Solicita permisos y obtiene token push (solo para desarrollo)
export async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('No se pudieron obtener permisos para notificaciones.');
      return;
    }
  }
  const token = (await Notifications.getDevicePushTokenAsync()).data;
  console.log('📲 Push token:', token);
  return token;
}

// Utilidad: convierte una hora tipo "HH:mm" a objeto Date
function getNextDateFromTimeString(time: string): Date | null {
  if (!/^\d{2}:\d{2}$/.test(time)) return null;

  const [hour, minute] = time.split(':').map(Number);
  if (isNaN(hour) || isNaN(minute)) return null;

  const now = new Date();
  const target = new Date();
  target.setHours(hour, minute, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 1); // Si ya pasó, agenda para mañana
  }

  return target;
}

// Notificación para materias (5 min antes)
export async function scheduleClassNotification(subject: Subject) {
  const targetDate = getNextDateFromTimeString(subject.start_time);
  if (!targetDate) {
    console.warn(`⛔ Hora inválida para materia "${subject.name}": ${subject.start_time}`);
    return;
  }

  const triggerDate = new Date(targetDate.getTime() - 5 * 60 * 1000); // 5 minutos antes

  await Notifications.scheduleNotificationAsync({
    content: {
      title: '📚 ¡Clase pronto!',
      body: `Clase de ${subject.name} a las ${subject.start_time} en ${subject.classroom}`,
      sound: 'default',
    },
    trigger: {
      date: triggerDate,
    } as Notifications.DateTriggerInput,
  });

  console.log(`⏰ Notificación para clase "${subject.name}" programada para ${triggerDate.toLocaleString()}`);
}

// Notificaciones para tareas (7, 3, 1 días antes a las 9:00 AM)
export async function scheduleTaskNotification(task: Task) {
  const dueDate = new Date(task.due_date);
  const now = new Date();
  const intervals = [7, 3, 1];

  for (const daysBefore of intervals) {
    const notifyDate = new Date(dueDate);
    notifyDate.setDate(dueDate.getDate() - daysBefore);
    notifyDate.setHours(9, 0, 0, 0);

    if (notifyDate > now) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `📌 Tarea: ${task.name}`,
          body: `Faltan ${daysBefore} día(s) para entregar: ${task.name}.`,
          sound: 'default',
        },
        trigger: {
          date: notifyDate,
        } as Notifications.DateTriggerInput,
      });

      console.log(`📅 Notificación de tarea "${task.name}" programada para ${notifyDate.toLocaleString()}`);
    }
  }
}

// Cancela todas las notificaciones programadas
export async function cancelAllNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log('🔕 Todas las notificaciones canceladas.');
}
