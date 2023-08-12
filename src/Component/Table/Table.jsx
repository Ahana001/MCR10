import "./Table.css";
import { tableHeaders } from "./constants";

export function Table({ filteredTableBody }) {
  return (
    <table className="Table">
      <thead>
        <tr>
          {tableHeaders.map((header) => {
            return <th key={header}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {filteredTableBody.map((oneRow) => {
          return (
            <tr key={oneRow.id}>
              {tableHeaders.map((oneColumnOfOneRow) => {
                if (oneColumnOfOneRow === "image") {
                  return (
                    <td key={oneColumnOfOneRow}>
                      <img
                        src={oneRow["imageUrl"]}
                        alt={oneColumnOfOneRow.name}
                      />
                    </td>
                  );
                }
                return (
                  <td key={oneColumnOfOneRow}>
                    {oneColumnOfOneRow === "price" ? "$" : ""}
                    {oneRow[oneColumnOfOneRow]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
