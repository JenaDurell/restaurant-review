import React from "react";
import { Star } from "@material-ui/icons";

const Stars = ({ numberOfStars }) => {
  return (
    <div>
      {Array.from({ length: numberOfStars }, (_, i) => (
        <Star key={i} className="material-icons" />
      ))}
    </div>
  );
};

export default Stars;
