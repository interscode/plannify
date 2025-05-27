import { useState, useEffect } from "react";
import { api } from "@/shared/services/api";
import { Shedule } from "@/shared/services/types";
import { useAuth } from "@/shared/hooks/use-auth";

export function useSchedule() {
  const [schedule, setSchedule] = useState<Shedule | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const getSchedule = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/schedule?userId=${user?.user_id}`);
      setSchedule(response.data);
    } catch (err) {
      setError("Error al obtener el horario. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return {
    schedule,
    loading,
    error,
    getSchedule,
  };
}
