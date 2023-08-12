import { useContext } from "react";
import "./DepartmentPage.css";
import { DataContext } from "../../Context/DataContext";
import { UIStructure } from "../../Component/UIStructure/UISctructure";
import { CardList } from "../../Component/CardList/CardList";
import { v4 as uuid } from "uuid";

export function DepartmentPage() {
  const { state } = useContext(DataContext);

  const set = new Set();
  state.inventory.forEach((item) => set.add(item.department));
  const departments = Array.from(set);

  const departmentList = departments.map((name) => ({
    id: uuid(),
    header: name.toLowerCase(),
    link: "/products",
  }));

  return (
    <div>
      <UIStructure>
        <CardList list={departmentList}></CardList>
      </UIStructure>
    </div>
  );
}
