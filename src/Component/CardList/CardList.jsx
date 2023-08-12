import "./CardList.css";

import { Card } from "../Card/Card";

export function CardList({ list }) {
  return (
    <div className="CardListConatiner">
      {list.map((cardItem, index) => {
        return (
          <Card key={cardItem.id} cardItem={cardItem} index={index}></Card>
        );
      })}
    </div>
  );
}
