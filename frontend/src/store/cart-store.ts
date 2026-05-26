import { create } from "zustand";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (id: number) => void;

  clearCart: () => void;

  totalItems: () => number;

  subtotal: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () =>
    set({
      items: [],
    }),

  totalItems: () => {
    return get().items.length;
  },

  subtotal: () => {
    return get().items.reduce(
      (total, item) => total + item.price,
      0
    );
  },
}));