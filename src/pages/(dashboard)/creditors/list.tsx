import Header from "../../../components/header";
import { FaPlus } from "react-icons/fa6";
import Table from "../../../components/table";
import {  createColumnHelper } from "@tanstack/react-table";
import { Credit } from "../../../types";
import IconButton from "../../../components/iconButton";
import { ImBin } from "react-icons/im";
import { AiOutlineEdit } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { dataFetcher } from "../../../lib/Axios";
import useModalToggle from "../../../modalStateStore";
import Spinner from "../../../components/spinner";

const columnHelper = createColumnHelper<Credit>();





const CreditorsList = () => {
  const [data, setData] = useState<Omit<Credit, "actions">[]>([]);
  const [isLoading,setIsLoading]=useState<Boolean>(false)
  const navigate=useNavigate()
const {isOpen,openModal,setText,setUrl,url}=useModalToggle()
const actionColumn = {
  id: "actions",
  header: "Actions",
  cell: (id:number) => (
    <div className="flex justify-center space-x-2">
      <IconButton
        className="border-Red-text hover:scale-105 transition-all duration-300"
        onClick={ async() =>{ 
        const formattedId=id+1
          setUrl(`https://sepehradmanage.runflare.run/api/creditors/delete-creditor/${formattedId}`)
          setText("آیا از حذف این مورد اطمینان دارید؟")
          setData(data.filter(item => Number(item.id) !== formattedId));
                   openModal()
        }}
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
    cell:(info)=> actionColumn.cell(info.cell.row.id),
  }),
  columnHelper.accessor("remaining_debt", {
    header: "مقدار مانده",
  }),
  columnHelper.accessor("paid_debt", {
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
 
  useEffect(()=>{
    const creditorsList=async()=>{
setIsLoading(true)
const list=await  dataFetcher("https://sepehradmanage.runflare.run/api/creditors/creditors-list/") as { data:Omit<Credit, "actions">[]} 
!list && navigate("/login")
setData(list.data)
console.log(list)

setIsLoading(false)
    }
    creditorsList()
  

  },[])
return isLoading ? <div className=" flex justify-center items-center w-full h-full">
   <Spinner color="border-Primary-main" size={96}/> 
</div> :  (
    <div className="lg:space-y-10 space-y-5">
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
        <Table rows={data} columns={columns} />
      </div>
    </div>
      );
};

export default CreditorsList;
