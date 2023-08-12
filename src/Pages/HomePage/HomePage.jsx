import { useContext } from "react";
import "./HomePage.css";
import { DataContext } from "../../Context/DataContext";
import { UIStructure } from "../../Component/UIStructure/UISctructure";
import { CardList } from "../../Component/CardList/CardList";
import { v4 as uuid } from "uuid";

export function HomePage() {
  const { state } = useContext(DataContext);

  if (!state.inventory) {
    return <h2>Loarding....</h2>;
  }

  const { total_stock, total_delivered, low_stock_items } =
    state.inventory.reduce(
      (acc, item) => {
        if (item.stock < 10) {
          acc.low_stock_items = acc.low_stock_items + item.stock;
        }
        acc.total_stock = acc.total_stock + item.stock;
        acc.total_delivered = acc.total_delivered + item.delivered;
        return acc;
      },
      {
        total_stock: 0,
        total_delivered: 0,
        low_stock_items: 0,
      }
    );

  const dashboardList = [
    {
      id: uuid(),
      description: "Total Stock",
      header: total_stock,
      link: "/",
    },
    {
      id: uuid(),
      description: "Total Delivered",
      header: total_delivered,
      link: "/",
    },
    {
      id: uuid(),
      description: "Low Stock Items",
      header: low_stock_items,
      link: "/",
    },
  ];

  return (
    <div>
      <UIStructure>{<CardList list={dashboardList} />}</UIStructure>
    </div>
  );
}
