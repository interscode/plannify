import { useEffect, useState } from "react";
import { api } from "@/shared/services/api";
import { Subject } from "@/shared/services/types";
import { useAuth } from "@/shared/hooks/use-auth";

export function useSubjects() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const getSubjects = async () => {
    setLoading(true);
    try {
      const response = await api.get("/subjects?userId=" + user?.sub);
      setSubjects(response.data);
    } catch (err) {
      setError("Error al obtener las tareas. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return {
    subjects,
    loading,
    error,
    getSubjects,
  };
}
