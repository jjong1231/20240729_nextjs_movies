import { create } from "zustand";

// 상태의 타입 정의
interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
}
// 초기 상태 정의
const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
