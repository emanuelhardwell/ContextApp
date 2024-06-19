import {create} from 'zustand';

interface StoreProfile {
  name: string;
  email: string;
}

export const useStoreProfile = create<StoreProfile>()(set => ({
  name: 'Emanuel',
  email: 'emanuel@gmail.com',
}));
