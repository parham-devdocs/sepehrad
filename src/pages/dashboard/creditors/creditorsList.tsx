import Header from "../../../components/header";
import { FaPlus } from "react-icons/fa6";
const CreditorsList = () => {
  return (
    <div className="">
      <Header
        header="لیست بستانکاران"
        buttonIcon={<FaPlus />}
        buttonText="افزودن بستانکار"
        path="/creditors/create"
      ></Header>
    </div>
  );
};

export default CreditorsList;
