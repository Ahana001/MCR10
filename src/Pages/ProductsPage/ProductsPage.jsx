import { useContext } from "react";
import "./ProductsPage.css";
import { DataContext } from "../../Context/DataContext";
import { UIStructure } from "../../Component/UIStructure/UISctructure";
import { sortByOptions } from "./constants";
import { Table } from "../../Component/Table/Table";
import { useFilterDataHook } from "../../Hook/FilterDataHook";
import { ActionTypes } from "../../Reducer/DataReducer";
import { Link } from "react-router-dom";

export function ProductsPage() {
  const { state, dispatch } = useContext(DataContext);
  let filteredProducts = useFilterDataHook();

  const set = new Set();
  state.inventory.forEach((item) => set.add(item.department));
  const departments = Array.from(set);

  return (
    <div>
      <UIStructure>
        <div className="ProductPage">
          <div className="HeaderFilters">
            <h2>Products</h2>
            <select
              defaultValue={state?.department}
              onChange={(e) => {
                dispatch({
                  type: ActionTypes.SET_DEPARTMENT,
                  payload: {
                    department: e.target.value,
                  },
                });
              }}
            >
              {departments.map((department) => {
                return (
                  <option key={department} value={department.toLowerCase()}>
                    {department}
                  </option>
                );
              })}
              <option value="AllDepartments">All Departments</option>
            </select>
            <div className="checkbox">
              <input
                type="checkbox"
                id="LowStock"
                defaultChecked={state.lowStockItems}
                onChange={() => {
                  dispatch({
                    type: ActionTypes.SET_LOW_STOCK_ITEMS,
                    payload: {
                      lowStockItems: !state.lowStockItems,
                    },
                  });
                }}
              ></input>
              <label htmlFor="LowStock">Low Stock Items</label>
            </div>
            <select
              defaultValue={state.sortBy}
              onChange={(e) => {
                dispatch({
                  type: ActionTypes.SET_SORT_BY,
                  payload: {
                    sortBy: e.target.value,
                  },
                });
              }}
            >
              {sortByOptions.map((filter) => {
                return (
                  <option key={filter} value={filter.toLowerCase()}>
                    {filter}
                  </option>
                );
              })}
            </select>

            <Link to="/addProduct">
              <button className="AddNewProduct"> New </button>
            </Link>
          </div>
        </div>
        <div className="TableConatiner">
          <Table filteredTableBody={filteredProducts}></Table>
        </div>
      </UIStructure>
    </div>
  );
}
