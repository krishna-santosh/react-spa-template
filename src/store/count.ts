import { create } from "zustand";

interface Count {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

export const useCount = create<Count>((set) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));
