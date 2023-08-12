import { OptionBar } from "../OptionBar/OptionBar";
import "./UIStructure.css";

export function UIStructure({ children }) {
  return (
    <div className="UIStructureContainer">
      <div className="LeftSideContainer">
        <OptionBar />
      </div>
      <div className="RightSideContainer">{children}</div>
    </div>
  );
}
