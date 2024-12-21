import { Product } from "./Products/columns";
import { create } from "zustand";

//structure of the overall state
interface ProductState {
  allProducts: Product[];
  isLoading: boolean;
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
  //
  openProductDialog: boolean;
  setOpenProductDialog: (openProductDialog: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  setAllProducts: (allProducts: Product[]) => void;
  loadProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<{ success: boolean }>;
  updateProduct: (updatedProduct: Product) => Promise<{ success: boolean }>;
  deleteProduct: (productId: string) => Promise<{ success: boolean }>;
}

export const useProductStore = create<ProductState>((set) => ({
  allProducts: [],
  isLoading: false,
  openDialog: false,
  setOpenDialog: (openDialog: boolean) => set({ openDialog }),
  openProductDialog: false,
  setOpenProductDialog: (openProductDialog: boolean) =>
    set({ openProductDialog }),
  selectedProduct: null,
  setSelectedProduct: (product: Product | null) => set({ selectedProduct: product }),
  setAllProducts: (allProducts: Product[]) => set({ allProducts }),
  loadProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      set({ allProducts: data });
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      set({ isLoading: false });
}));
