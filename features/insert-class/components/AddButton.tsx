import { Link } from "expo-router";

const AddButton = () => (
  <Link
    href="../classes"
    className="mt-2 w-[80%] self-center rounded-[15] border border-[#000080] bg-[#f8f8ff] p-4 text-center text-[16px] font-bold text-[#000080]"
  >
    Añadir Materia
  </Link>
);

export default AddButton;
