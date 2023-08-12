export const ActionTypes = {
  INITIAL_SET_INVENTORY: "INITIAL_SET_INVENTORY",
  INITIAL_SET_SORT_BY: "INITIAL_SET_SORT_BY",
  INITIAL_SET_DEPARTMENT: "INITIAL_SET_DEPARTMENT",
  INITIAL_SET_LOW_STOCK_ITEMS: "INITIAL_SET_LOW_STOCK_ITEMS",
  SET_DEPARTMENT: "SET_DEPARTMENT",
  SET_LOW_STOCK_ITEMS: "SET_LOW_STOCK_ITEMS",
  SET_SORT_BY: "SET_SORT_BY",
  ADD_NEW_PRODUCT: "ADD_NEW_PRODUCT",
};
export const initialState = {
  inventory: [],
  department: "AllDepartments",
  sortBy: "name",
  lowStockItems: false,
};

export function DataReducer(state, action) {
  let result;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionTypes.INITIAL_SET_INVENTORY: {
      result = {
        ...state,
        inventory: action.payload.inventory,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_DEPARTMENT: {
      result = {
        ...state,
        department: action.payload.department,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_SORT_BY: {
      result = {
        ...state,
        sortBy: action.payload.sortBy,
      };
      break;
    }
    case ActionTypes.INITIAL_SET_LOW_STOCK_ITEMS: {
      result = {
        ...state,
        lowStockItems: action.payload.lowStockItems,
      };
      break;
    }
    case ActionTypes.SET_DEPARTMENT: {
      result = {
        ...state,
        department: action.payload.department,
      };
      localStorage.setItem(
        "department",
        JSON.stringify(action.payload.department)
      );

      break;
    }
    case ActionTypes.SET_LOW_STOCK_ITEMS: {
      result = {
        ...state,
        lowStockItems: action.payload.lowStockItems,
      };
      localStorage.setItem(
        "lowStockItems",
        JSON.stringify(action.payload.lowStockItems)
      );
      break;
    }
    case ActionTypes.SET_SORT_BY: {
      result = {
        ...state,
        sortBy: action.payload.sortBy,
      };
      localStorage.setItem("sortBy", JSON.stringify(action.payload.sortBy));
      break;
    }
    case ActionTypes.ADD_NEW_PRODUCT: {
      const newUpdatedInventory = [
        ...state.inventory,
        { ...action.payload.product, id: state.inventory.length },
      ];
      result = {
        ...state,
        inventory: newUpdatedInventory,
      };
      localStorage.setItem("inventory", JSON.stringify(newUpdatedInventory));

      break;
    }
  }
  return result;
}
