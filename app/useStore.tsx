import { create } from "zustand";

// 초기 상태 정의
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state: number) => ({ count: state.count + 1 })),
  decrement: () => set((state: number) => ({ count: state.count - 1 })),
}));

export default useStore;
