import { create } from "zustand";

export const useStore = create((set, get) => ({
  // state
  count: 0,
  name: "Rakshita",


  increment: () => set({ count: get().count + 1 }),
  reset: () => set({ count: 0 }),
  setName: (newName) => set({ name: newName }),


  isEven: () => get().count % 2 === 0,
}));



