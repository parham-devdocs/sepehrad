import { create } from "zustand"
type ModalType={
  isOpen:boolean
   text:"آیا از حذف این مورد اطمینان دارید؟" |"آیا از ویرایش ایم مورد اطمینان دارید؟"
  url:string
  setText:(text:"آیا از حذف این مورد اطمینان دارید؟" |"آیا از ویرایش ایم مورد اطمینان دارید؟")=>void
  setUrl:(url:string)=>void
  openModal:()=>void
  closeModal:()=>void
  toggleModal:()=>void
}

const useStore = create<ModalType>((set) => ({
  isOpen: false, // Initial state of the modal
  text:"آیا از حذف این مورد اطمینان دارید؟",
  url:"",
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })), // Toggle function
  openModal: () => set({ isOpen: true }), // Open modal
  closeModal: () => set({ isOpen: false }), // Close modal
  setText:(text)=>set({text}),
  setUrl:(url:string)=>set({url})
  }))

  export default useStore