import { createContext, useEffect, useReducer } from "react";
import { ActionTypes, DataReducer, initialState } from "../Reducer/DataReducer";
import { inventoryData } from "../Data/inventory";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const localStorageInventory = localStorage.getItem("inventory");
  const localStorageSortBy = localStorage.getItem("sortBy");
  const localStorageDepartment = null;
  const localStorageLowStockItems = null;

  useEffect(() => {
    if (!localStorageInventory) {
      dispatch({
        type: ActionTypes.INITIAL_SET_INVENTORY,
        payload: {
          inventory: inventoryData,
        },
      });
      localStorage.setItem("inventory", JSON.stringify(inventoryData));
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_INVENTORY,
        payload: { inventory: JSON.parse(localStorageInventory) },
      });
    }

    if (!localStorageSortBy) {
      dispatch({
        type: ActionTypes.INITIAL_SET_SORT_BY,
        payload: {
          sortBy: "name",
        },
      });
      localStorage.setItem("sortBy", JSON.stringify("name"));
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_SORT_BY,
        payload: { sortBy: JSON.parse(localStorageSortBy) },
      });
    }

    if (!localStorageDepartment) {
      dispatch({
        type: ActionTypes.INITIAL_SET_DEPARTMENT,
        payload: {
          department: "AllDepartments",
        },
      });
      localStorage.setItem("department", JSON.stringify("AllDepartments"));
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_DEPARTMENT,
        payload: { department: JSON.parse(localStorageDepartment) },
      });
    }

    if (!localStorageLowStockItems) {
      dispatch({
        type: ActionTypes.INITIAL_SET_LOW_STOCK_ITEMS,
        payload: {
          lowStockItems: false,
        },
      });
      localStorage.setItem("lowStockItems", false);
    } else {
      dispatch({
        type: ActionTypes.INITIAL_SET_LOW_STOCK_ITEMS,
        payload: { lowStockItems: JSON.parse(localStorageLowStockItems) },
      });
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
