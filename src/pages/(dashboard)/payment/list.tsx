import Header from "../../../components/header";
import { FaPlus } from "react-icons/fa6";
import Table from "../../../components/table";
import {  createColumnHelper } from "@tanstack/react-table";
import {   Payment } from "../../../types";
import IconButton from "../../../components/iconButton";
import { ImBin } from "react-icons/im";
import { AiOutlineEdit } from "react-icons/ai";

const columnHelper = createColumnHelper<Payment>();

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
  columnHelper.accessor("date", {
    header: () => "تاریخ",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("type", {
    header: () => "نوع برداخت",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: () => "مبلغ برداختی",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => "بستانکار",
    cell: (info) => info.getValue(),
  }),
];

const payments:Omit<Payment,"actions">[]  = [
  {
    id: 1,
    name: "جان دو",
    amount: "5000",
    type: "چک",
    date: "1402/2/2"
  },
  {
    id: 1,
    name: "جان دو",
    amount: "5000",
    type: "خدمات",
    date: "1402/2/2",
  },
];
const PaymentList = () => {
  return (
    <div className=" lg:space-y-10 space-y-5">
      <Header buttonText="برداخت جدید" header="لیست برداخت ها" path="/payment/list/" buttonIcon=<FaPlus/> />
      <Table rows={payments} columns={columns  }/>
    </div>
  )
}

export default PaymentList
