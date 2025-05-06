import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const AddClassButton = () => 
        <Link href="../insert-class" className="text-center self-center w-[80%] border border-[#000080] rounded-[15] bg-[#f8f8ff] p-4 mt-2 text-[#000080] font-bold text-[16px] mb-6">Añadir clase</Link>

export default AddClassButton;