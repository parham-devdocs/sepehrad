import Header from "../../../components/header";
import { FaPlus } from "react-icons/fa6";
import Table from "../../../components/table";
import {  createColumnHelper } from "@tanstack/react-table";
import {  Debt } from "../../../types";
import IconButton from "../../../components/iconButton";
import { ImBin } from "react-icons/im";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dataFetcher, deleteData } from "../../../lib/Axios";
import Spinner from "../../../components/spinner";

const columnHelper = createColumnHelper<Debt>();

const actionColumn = {
  id: "actions",
  header: "Actions",
  cell: (id) => (
    <div className="flex justify-center space-x-2">
      <IconButton
        className="border-Red-text hover:scale-105 transition-all duration-300"
        onClick={() => console.log(  id)}
        icon={<ImBin className="text-Red-text" />}
      />
      <IconButton
        className="border-Primary-dark hover:scale-105 transition-all duration-300"
        onClick={() => console.log(id)}
        icon={<AiOutlineEdit size={25} className="text-Primary-dark" />}
      />
    </div>
  ),
};
const columns = [
  columnHelper.accessor("actions", {
    header: () => "",
    cell:(info)=> actionColumn.cell(info.cell.row.id  ),
  }),
  columnHelper.accessor("payment_until", {
    header: "موعد پرداخت",
  }),
  columnHelper.accessor("date", {
    header: () => "تاریخ",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: () => "بابت",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: () => " مبلغ بدهی",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("creditor", {
    header: () => "نام",
    cell: (info) => info.getValue(),
  }),
];

 

const DebtList = () => {
  const [data, setData] = useState<Omit<Debt, "actions">[]>([]);
  const [isLoading,setIsLoading]=useState<Boolean>(false)
  const navigate=useNavigate()
  useEffect(()=>{
    const creditorsList=async()=>{
setIsLoading(true)
const list=await  dataFetcher("https://sepehradmanage.runflare.run/api/creditors/debt-list/") as { results:Omit<Debt, "actions">[]} 
!list && navigate("/login")
setData(list.results)
console.log(list)

setIsLoading(false)
    }
    creditorsList()
  

  },[])
 return isLoading ? <div className=" w-full h-full flex justify-center items-center">
  <Spinner size={96} color="border-Primary-main"/>
 </div> :(
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
        <Table rows={data} columns={columns} />
      </div>
    </div>
  );
};

export default DebtList;
