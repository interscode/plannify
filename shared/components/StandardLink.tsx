import { Text, Pressable } from "react-native";
import { Link } from "expo-router";

type StandardLinkProps = {
  buttonText: string;
  href: string;
  opaque: boolean;
};

const StandardLink = ({ buttonText, opaque, href }: StandardLinkProps) => (
  <Link href={href} asChild>
    <Pressable
      className={`mt-[5px] w-full rounded-[10px] p-4 ${opaque ? "bg-[#000080]" : "border border-[#000080] bg-[#f8f8ff]"}`}
    >
      <Text
        className={`w-full text-center text-lg font-bold ${opaque ? "text-[white]" : "text-[#000080]"}`}
      >
        {buttonText}
      </Text>
    </Pressable>
  </Link>
);

export default StandardLink;
