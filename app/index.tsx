import { Link } from "expo-router";
import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";

export default function App() {
  verifyInstallation();
  return (
    <View className="flex flex-1 items-center justify-center">
      <Link href={"./scan"}>
        Scan
      </Link>
      <Link href={"./task"} className="mt-4">
        Task
      </Link>
      <Link href={"/task/[taskId]"} className="mt-4">
        TaskId
      </Link>
    </View>
  );
}
