import {create} from 'zustand';

interface StoreProfile {
  name: string;
  email: string;
  changeProfile: (name: string, email: string) => void;
}

export const useStoreProfile = create<StoreProfile>()(set => ({
  name: 'Emanuel',
  email: 'emanuel@gmail.com',
  changeProfile: (name: string, email: string) => {
    set({name, email});
  },
}));
