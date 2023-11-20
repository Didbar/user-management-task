import { create } from 'zustand'

interface UserManagementStore {
  addingGroup: boolean
  setAddingGroup: (param: boolean) => void
}

const useUserManagementStore = create<UserManagementStore>(set => ({
  addingGroup: false,
  setAddingGroup: param => set(() => ({ addingGroup: param })),
}))

export default useUserManagementStore
