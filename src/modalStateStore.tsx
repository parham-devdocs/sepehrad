import { create } from "zustand"
type ModalType={
  isOpen:boolean
  openModal:()=>void
  closeModal:()=>void
  toggleModal:()=>void
}

const useStore = create<ModalType>((set) => ({
  isOpen: false, // Initial state of the modal
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })), // Toggle function
  openModal: () => set({ isOpen: true }), // Open modal
  closeModal: () => set({ isOpen: false }), // Close modal
  }))

  export default useStore