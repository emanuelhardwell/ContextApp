import {create} from 'zustand';

interface StoreCounter {
  count: number;
  incrementBy: (value: number) => void;
}

export const useStoreCounter = create<StoreCounter>()((set, get) => ({
  count: 0,
  incrementBy: (value: number) => {
    // set(state => ({count: state.count + value})); //FORMA1
    set({count: get().count + value}); //FORMA2
  },
}));
