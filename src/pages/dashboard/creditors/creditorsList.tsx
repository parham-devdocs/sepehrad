import Header from "../../../components/header";
import { FaPlus } from "react-icons/fa6";
import Table from "../../../components/table";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { Credit } from "../../../types";
import IconButton from "../../../components/iconButton";
import { ImBin } from "react-icons/im";
import { AiOutlineEdit } from "react-icons/ai";
import { NavLink } from "react-router";

const columnHelper = createColumnHelper<Credit>();

const actionColumn = {
  id: "actions",
  header: "Actions",
  cell: ({ row }: { row: any }) => (
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

const viewButtons = {
  cell: ({ row, text, path }: { row: any; text: string; path: string }) => {
    return (
      <div className="flex justify-center flex-col items-center gap-3 space-x-2">
        <p>{row.getValue("status")}</p>
        <NavLink className="text-Primary-dark text-[15px]" to={`/${path}/`}>
          {text}
        </NavLink>
      </div>
    );
  },
};

const columns = [
  columnHelper.accessor("actions", {
    header: () => "",
    cell: actionColumn.cell,
  }),
  columnHelper.accessor("balance", {
    header: "مقدار مانده",
  }),
  columnHelper.accessor("status", {
    header: () => "وضعیت پرداخت",
    cell: (info) =>
      viewButtons.cell({
        row: info.cell,
        text: "مشاهده لیست پرداخت ها",
        path: "payment/list",
      }),
  }),
  columnHelper.accessor("total_debt", {
    header: () => "مجموع بدهی",
    cell: (info) =>
      viewButtons.cell({
        row: info.cell,
        text: " مشاهده لیست بدهی ها",
        path: "dept/list",
      }),
  }),
  columnHelper.accessor("phone_number", {
    header: () => "شماره تماس",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => "نام",
    cell: (info) => info.getValue(),
  }),
];

const credits: Credit[] = [
  {
    id: 1,
    name: "جان دو",
    phone_number: "123-456-7890",
    total_debt: "20%",
    status: "پرداخت شده",
    balance: "150.25",
  },
  {
    id: 2,
    name: "آلیس اسمیت",
    phone_number: "987-654-3210",
    total_debt: "100",
    status: "در حال انجام",
    balance: "50.75",
  },
  {
    id: 3,
    name: "باب جانسون",
    phone_number: "555-555-5555",
    total_debt: "300",
    status: "معوقه",
    balance: "0.0",
  },
  {
    id: 4,
    name: "مری ویلیامز",
    phone_number: "444-444-4444",
    total_debt: "150",
    status: "پرداخت شده",
    balance: "75.5",
  },
  {
    id: 5,
    name: "جیمز براون",
    phone_number: "333-333-3333",
    total_debt: "250",
    status: "در حال انجام",
    balance: "25.0",
  },
];

const CreditorsList = () => {
  return (
    <div className="lg:space-y-10 space-y-5 ">
      {" "}
      {/* Added padding on the sides */}
      <Header
        header="لیست بستانکاران"
        buttonIcon={<FaPlus />}
        buttonText="افزودن بستانکار"
        path="/creditors/create"
      />
      <div className="overflow-hidden">
        {" "}
        {/* Optional: wrap for overflow handling */}
        <Table rows={credits} columns={columns} />
      </div>
    </div>
  );
};

export default CreditorsList;
