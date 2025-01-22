import { useState } from "react";
import "./index.css";
const StarComponent = ({ starCount = 5 }) => {
  const [starValue, setStarValue] = useState(null);
  const [hoverValue, setHoverValue] = useState(null);
  return (
    <div>
      {new Array(starCount).fill(0).map((_, i) => {
        return (
          <span
            className={i < starValue || i < hoverValue ? "gold star" : "star"}
            key={i}
            onClick={() => setStarValue(i + 1)}
            onMouseEnter={() => setHoverValue(i + 1)}
            onMouseLeave={() => setHoverValue(null)}
            style={{ fontSize: "50px" }}
          >
            &#9733;
          </span>
        );
      })}

      {/* <span style={{ fontSize: "50px" }}>&#9733;</span>
      <span style={{ fontSize: "50px" }}>&#9733;</span>
      <span style={{ fontSize: "50px" }}>&#9733;</span>
      <span style={{ fontSize: "50px" }}>&#9733;</span> */}
    </div>
  );
};

export default StarComponent;
