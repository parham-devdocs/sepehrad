import { useState } from "react"
import DropdownInput from "../../../components/DropdownInput"

const CreateDebt = () => {
 const [dropdownOptions,setDropdownOptions] =useState<string[]>(["علی نصیری ", "محمد توکلی"])
  return (
    <div className=" animate-fade-in-scale">
     <p className=" text-right font-[700] text-[25px]">ثبت بدهی جدید</p>
     <div>
<DropdownInput text="بستانکار مربوطه" options={dropdownOptions} />
     </div>
    </div>
  )
}

export default CreateDebt



function Input() {
  return <input type="text" className=" w-[350px] h-[60px] border-[2px] border-Primary-main rounded-[8px] bg-Primary-super-light" />
}