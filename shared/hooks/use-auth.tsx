import { createContext, useContext, useEffect, useState } from "react";
import {
  confirmSignUp,
  fetchUserAttributes,
  signOut,
  signUp,
  signIn,
  signInWithRedirect,
} from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useRouter } from "expo-router";

type UserInfo = {
  email?: string;
  name?: string;
  [key: string]: any;
};

type AuthContextType = {
  user: UserInfo | null;
  loading: boolean;
  actionLoading?: boolean;
  signOutUser: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (
    name: string,
    email: string,
    password: string,
  ) => Promise<void>;
  confirmSignUpWithEmail: (email: string, code: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  actionLoading: false,
  signOutUser: async () => {},
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  confirmSignUpWithEmail: async () => {},
  signInWithGoogle: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const router = useRouter();

  const loadUser = async () => {
    try {
      const attributes = await fetchUserAttributes();
      setUser({
        email: attributes.email,
        name: attributes.name,
        ...attributes,
      });
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    await signOut();
    setUser(null);
    router.push("/auth/signin");
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }
    setActionLoading(true);
    try {
      const { nextStep, isSignedIn } = await signIn({
        username: email,
        password,
      });
      if (isSignedIn) {
        await loadUser();
        router.push("/auth/callback");
      } else if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
        router.push(`/auth/confirm-signup?email=${email}`);
      }
    } catch (error) {
      console.error("Error signing in with email:", error);
      throw new Error("Failed to sign in with email.");
    } finally {
      setActionLoading(false);
    }
  };

  const confirmSignUpWithEmail = async (email: string, code: string) => {
    if (!email || !code) {
      throw new Error("Email and confirmation code are required.");
    }
    setActionLoading(true);
    try {
      const { isSignUpComplete } = await confirmSignUp({
        username: email,
        confirmationCode: code,
      });
      if (isSignUpComplete) {
        await loadUser();
        router.push("/auth/callback");
      }
    } catch (error) {
      console.error("Error confirming sign up:", error);
      throw new Error("Failed to confirm sign up.");
    } finally {
      setActionLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect({
        provider: "Google",
        options: {
          lang: "es",
        },
      });
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw new Error("Failed to sign in with Google.");
    }
  };

  const signUpWithEmail = async (
    name: string,
    email: string,
    password: string,
  ) => {
    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required.");
    }
    setActionLoading(true);
    try {
      const { nextStep } = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            name: name,
          },
        },
      });
      if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
        router.push(`/auth/confirm-signup?email=${email}`);
      } else if (nextStep.signUpStep === "DONE") {
        await loadUser();
        router.push("/auth/callback");
      }
    } catch (error) {
      console.error("Error signing in with email:", error);
      throw new Error("Failed to sign up with email.");
    } finally {
      setActionLoading(false);
    }
  };

  useEffect(() => {
    loadUser();

    const listener = (data: any) => {
      const { event } = data.payload;
      if (event === "signedIn" || event === "tokenRefresh") {
        loadUser();
      }
      if (event === "signedOut") {
        setUser(null);
      }
    };

    const unsubscribe = Hub.listen("auth", listener);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        actionLoading,
        signOutUser,
        signInWithEmail,
        signUpWithEmail,
        confirmSignUpWithEmail,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
