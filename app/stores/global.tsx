import { create } from "zustand";

const listCntStore = create((set) => ({
  count: 0,
  maxCount: 100,
  minCount: 0,
  increase: () =>
    set((state) => ({
      count: state.count < state.maxCount ? state.count + 1 : state.count,
    })),
  decrease: () =>
    set((state) => ({
      count: state.count > state.minCount ? state.count - 1 : state.count,
    })),
}));

export default listCntStore;
