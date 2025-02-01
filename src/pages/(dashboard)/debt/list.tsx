import Header from "../../../components/header";
import { FaPlus } from "react-icons/fa6";
import Table from "../../../components/table";
import {  createColumnHelper } from "@tanstack/react-table";
import {  Debt } from "../../../types";
import IconButton from "../../../components/iconButton";
import { ImBin } from "react-icons/im";
import { AiOutlineEdit } from "react-icons/ai";

const columnHelper = createColumnHelper<Debt>();

const actionColumn = {
  id: "actions",
  header: "Actions",
  cell: () => (
    <div className="flex justify-center space-x-2">
      <IconButton
        className="border-Red-text hover:scale-105 transition-all duration-300"
        onClick={() => console.log("delete")}
        icon={<ImBin className="text-Red-text" />}
      />
      <IconButton
        className="border-Primary-dark hover:scale-105 transition-all duration-300"
        onClick={() => console.log("edit")}
        icon={<AiOutlineEdit size={25} className="text-Primary-dark" />}
      />
    </div>
  ),
};
const columns = [
  columnHelper.accessor("actions", {
    header: () => "",
    cell: actionColumn.cell,
  }),
  columnHelper.accessor("deadline", {
    header: "موعد پرداخت",
  }),
  columnHelper.accessor("date", {
    header: () => "تاریخ",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("for", {
    header: () => "بابت",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: () => " مبلغ بدهی",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => "نام",
    cell: (info) => info.getValue(),
  }),
];

const debts:Omit<Debt,"actions">[]  = [
  {
    id: 1,
    name: "جان دو",
    amount: "5000",
    for: "خرید فلان چیز",
    date: "1402/2/2",
    deadline: "1402/1/5",
  },
  {
    id: 1,
    name: "جان دو",
    amount: "5000",
    for: "خرید فلان چیز",
    date: "1402/2/2",
    deadline: "1402/1/5",
  },
];

const CreditorsList = () => {
  return (
    <div className="lg:space-y-10 space-y-5 ">
      {" "}
      {/* Added padding on the sides */}
      <Header
        header="لیست بدهی ها"
        buttonIcon={<FaPlus />}
        buttonText="افزودن بدهی"
        path="/debt/create"
      />
      <div className="overflow-hidden">
        {" "}
        {/* Optional: wrap for overflow handling */}
        <Table rows={debts} columns={columns} />
      </div>
    </div>
  );
};

export default CreditorsList;
