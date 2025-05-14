import { View, TextInput } from "react-native";

type StandardTextInputProps = {
  placeholder: string;
};

const StandartdTextInput = ({ placeholder }: StandardTextInputProps) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor="#cacaca"
    className="mb-[5px] mt-[5px] h-[50] rounded-[10] border border-[#e0e0e0] bg-[#faf8fb] px-3"
  />
);

export default StandartdTextInput;
