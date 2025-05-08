import { Text } from "react-native";
import { Link } from "expo-router";

type StandardLinkProps = {
  buttonText: string;
  href: string;
  opaque: boolean;
};

const StandardLink = ({ buttonText, opaque, href }: StandardLinkProps) => (
  <Link
    href={href}
    className={`mt-[5px] w-[80%] self-center rounded-[10px] p-4 text-center text-lg font-bold ${opaque ? "bg-[#000080] text-[white]" : "border border-[#000080] bg-[#f8f8ff] text-[#000080]"}`}
  >
    <Text>{buttonText}</Text>
  </Link>
);

export default StandardLink;
