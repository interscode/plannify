import { api } from "@/shared/services/api";
import { AxiosError } from "axios";

export async function scanSchedule(formData: FormData) {
  try {
    const response = await api.post("/schedules/scan", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.message);
      console.log(error.request);
    }
    console.error("Error scanning schedule:", error);
    throw error;
  }
}
