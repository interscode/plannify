// shared/hooks/use-update-profile.ts
import { updateUserAttributes, updatePassword } from "aws-amplify/auth";
import { useAuth } from "./use-auth";

export const useUpdateProfile = () => {
  const { user, loadUser, actionLoading } = useAuth();

  const updateName = async (name: string) => {
    if (!name) throw new Error("Name is required");
    await updateUserAttributes({ userAttributes: { name } });
    await loadUser?.();
  };

  const updateEmail = async (email: string) => {
    if (!email) throw new Error("Email is required");
    await updateUserAttributes({ userAttributes: { email } });
    await loadUser?.();
  };

  const changePassword = async (
    oldPassword: string,
    newPassword: string,
  ) => {
    if (!oldPassword || !newPassword) {
      throw new Error("Old and new passwords are required");
    }
    await updatePassword({ oldPassword, newPassword });
  };

  return {
    updateName,
    updateEmail,
    changePassword,
    actionLoading,
  };
};
