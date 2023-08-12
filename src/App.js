import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "./Pages/HomePage/HomePage";
import { DepartmentPage } from "./Pages/DepartmentPage/DepartmentPage";
import { ProductsPage } from "./Pages/ProductsPage/ProductsPage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { AddNewProductPage } from "./Pages/AddNewProductPage/AddNewProductPage";
import { SingleProductPage } from "./Pages/SingleProductPage/SingleProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/department" element={<DepartmentPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/addProduct" element={<AddNewProductPage />}></Route>
        <Route
          path="/product/:productID"
          element={<SingleProductPage />}
        ></Route>

        <Route path="/404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
