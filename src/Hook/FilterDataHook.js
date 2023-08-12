import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const useFilterDataHook = () => {
  const { state } = useContext(DataContext);
  let filteredProducts = state.inventory;
  filteredProducts = filteredProducts.filter((oneRow) => {
    if (
      state?.department === "AllDepartments" ||
      oneRow?.department.toLowerCase() === state?.department.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  });
  if (state.lowStockItems) {
    filteredProducts = filteredProducts.filter((oneRow) => {
      if (oneRow?.stock <= 10) {
        return true;
      } else {
        return false;
      }
    });
  }
  // eslint-disable-next-line default-case
  switch (state.sortBy) {
    case "name": {
      filteredProducts = filteredProducts.sort((a, b) => {
        const productNameA = a.name.toLowerCase();
        const productNameB = b.name.toLowerCase();
        if (productNameA < productNameB) {
          return -1;
        }
        if (productNameA > productNameB) {
          return 1;
        }
        return 0;
      });
      break;
    }
    case "price": {
      filteredProducts = filteredProducts.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    }
    case "stock": {
      filteredProducts = filteredProducts.sort((a, b) => {
        return a.stock - b.stock;
      });
      break;
    }
  }
  return filteredProducts;
};
