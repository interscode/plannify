import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const AddClassButton = () => (
  <Link
    href="../insert-class"
    className="mb-6 mt-2 w-[80%] self-center rounded-[15] border border-[#000080] bg-[#f8f8ff] p-4 text-center text-[16px] font-bold text-[#000080]"
  >
    Añadir clase
  </Link>
);

export default AddClassButton;
