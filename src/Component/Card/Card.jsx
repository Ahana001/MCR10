import { useNavigate } from "react-router-dom";
import "./Card.css";
import { useContext } from "react";
import { ActionTypes } from "../../Reducer/DataReducer";
import { DataContext } from "../../Context/DataContext";

const colors = ["green", "orange", "red"];

export function Card({ cardItem, index }) {
  const navigator = useNavigate();
  const { dispatch } = useContext(DataContext);

  return (
    <div
      className="CardContainer"
      style={{ cursor: cardItem.link ? "pointer" : "" }}
      onClick={() => {
        if (cardItem.link) {
          dispatch({
            type: ActionTypes.SET_DEPARTMENT,
            payload: {
              department: cardItem.header,
            },
          });
          navigator(cardItem.link);
        }
      }}
    >
      <h2 style={{ color: cardItem.description ? colors[index] : "black" }}>
        {cardItem.header}
      </h2>
      {cardItem.description ? <p>{cardItem.description}</p> : null}
    </div>
  );
}
