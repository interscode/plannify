import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "https://api.plannify.interscode.com/auth",
  plugins: [
    expoClient({
      scheme: "plannify",
      storagePrefix: "plannify",
      storage: SecureStore,
    }),
  ],
});
