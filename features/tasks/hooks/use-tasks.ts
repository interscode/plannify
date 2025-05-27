import { useEffect, useState } from "react";
import { api } from "@/shared/services/api";
import { Task } from "@/shared/services/types";
import { useAuth } from "@/shared/hooks/use-auth";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const getTasks = async () => {
    setLoading(true);
    try {
      const response = await api.get("/tasks?userId=" + user?.user_id);
      setTasks(response.data);
    } catch (err) {
      setError("Error al obtener las tareas. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    getTasks,
  };
}
