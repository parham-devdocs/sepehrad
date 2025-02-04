import { FC } from "react";
import AlertSign from "/alertSign.png";
import useModalToggle from "../modalStateStore";
import { deleteData } from "../lib/Axios";
import { toast, ToastContainer } from "react-toastify";

interface ModalTypes {
  url: string;
  text: "آیا از حذف این مورد اطمینان دارید؟" | "آیا از ویرایش ایم مورد اطمینان دارید؟";
}

export const Modal: FC<ModalTypes> = ({ url, text }) => {
  const { closeModal } = useModalToggle();

  async function deleteItem() {
    try {
      await deleteData(url); // Wait for the deletion to complete
      toast.success("مورد حذف شد"); // Show success message
      closeModal(); // Close the modal after successful deletion
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast.error("تلاش مجدد!"); // Show error message
    }
  }

  return (
    <div className="lg:w-fit lg:h-fit mx-8 w-full h-1/2 px-8 py-8 animate-fade-in bg-Primary-super-light shadow-md rounded-[12px] flex flex-col gap-8 items-center">
      <img src={AlertSign} alt="alert logo" className="mt-6" />
      <p className="font-[900] text-[20px] whitespace-nowrap">{text}</p>
      <div className="flex justify-between items-center w-full">
        <button
          className="px-4 py-2 bg-transparent border-[2px] rounded-[10px] border-Primary-main text-Primary-main font-[600]"
          onClick={() => closeModal()}
        >
          انصراف
        </button>
        <button
          className="px-4 py-2 bg-Red-Background border-[2px] rounded-[10px] border-Red-text text-Red-text font-[600]"
          onClick={deleteItem}
        >
          {text === "آیا از حذف این مورد اطمینان دارید؟"
            ? "حذف این مورد"
            : "ویرایش این مورد"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};