import { useContext, useState } from "react";
import "./AddNewProductPage.css";
import { DataContext } from "../../Context/DataContext";
import { UIStructure } from "../../Component/UIStructure/UISctructure";
import { ActionTypes } from "../../Reducer/DataReducer";
import { useNavigate } from "react-router-dom";
export function AddNewProductPage() {
  const { state, dispatch } = useContext(DataContext);
  const navigator = useNavigate();

  const [newProductForm, setNewProductForm] = useState({
    name: "",
    department: "selectDepartment",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const set = new Set();
  state.inventory.forEach((item) => set.add(item.department));
  const departments = Array.from(set);

  return (
    <UIStructure>
      <div className="AddNewProductPage">
        <h2>Add New Product</h2>
        <div className="AddNewProductForm">
          <div className="ProductDepartment">
            <div>Department: </div>
            <select
              defaultValue={newProductForm.department}
              onChange={(e) => {
                setNewProductForm(() => ({
                  ...newProductForm,
                  department: e.target.value,
                }));
              }}
            >
              {departments.map((department) => {
                return (
                  <option key={department} value={department}>
                    {department}
                  </option>
                );
              })}
              <option value="selectDepartment" disabled>
                Select Department
              </option>
            </select>
          </div>
          <div className="ProductName">
            <div>Name: </div>
            <input
              type="text"
              defaultValue={newProductForm.name}
              onChange={(e) => {
                setNewProductForm(() => ({
                  ...newProductForm,
                  name: e.target.value,
                }));
              }}
            />
          </div>
          <div className="ProductDescription">
            <div>Description: </div>
            <textarea
              type="text"
              defaultValue={newProductForm.description}
              onChange={(e) => {
                setNewProductForm(() => ({
                  ...newProductForm,
                  description: e.target.value,
                }));
              }}
            />
          </div>
          <div className="ProductPrice">
            <div>Price: </div>
            <input
              type="number"
              defaultValue={newProductForm.price}
              onChange={(e) => {
                setNewProductForm(() => ({
                  ...newProductForm,
                  price: +e.target.value,
                }));
              }}
            />
          </div>
          <div className="ProductStock">
            <div>Stock: </div>
            <input
              type="number"
              defaultValue={newProductForm.stock}
              onChange={(e) => {
                setNewProductForm(() => ({
                  ...newProductForm,
                  stock: +e.target.value,
                }));
              }}
            />
          </div>
          <div className="ProductSKU">
            <div>SKU: </div>
            <input
              type="text"
              defaultValue={newProductForm.sku}
              onChange={(e) => {
                setNewProductForm(() => ({
                  ...newProductForm,
                  sku: e.target.value,
                }));
              }}
            />
          </div>
          <div className="ProductSupplier">
            <div>Supplier: </div>
            <input
              type="text"
              defaultValue={newProductForm.supplier}
              onChange={(e) => {
                setNewProductForm(() => ({
                  ...newProductForm,
                  supplier: e.target.value,
                }));
              }}
            />
          </div>
          <div className="ProductDelivered">
            <div>Delivered: </div>
            <input
              type="number"
              defaultValue={newProductForm.delivered}
              disabled
            />
          </div>
          <div className="ProductImageUrl">
            <div>ImageUrl: </div>
            <input
              type="text"
              defaultValue={newProductForm.imageUrl}
              onChange={(e) => {
                setNewProductForm(() => ({
                  ...newProductForm,
                  imageUrl: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            dispatch({
              type: ActionTypes.ADD_NEW_PRODUCT,
              payload: {
                product: newProductForm,
              },
            });
            setNewProductForm({
              name: "",
              department: "selectDepartment",
              description: "",
              price: 0,
              stock: 0,
              sku: "",
              supplier: "",
              delivered: 0,
              imageUrl: "",
            });
            dispatch({
              type: ActionTypes.SET_DEPARTMENT,
              payload: {
                department: newProductForm.department.toLowerCase(),
              },
            });
            navigator("/products");
          }}
        >
          Add Product
        </button>
      </div>
    </UIStructure>
  );
}
