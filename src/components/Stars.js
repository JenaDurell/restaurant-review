import React from "react";
import { Star } from "@material-ui/icons";



  const Stars =({ numberOfStars })=>{
   

    return (
      <div>
        {Array(numberOfStars).fill(
          <Star className="material-icons" />
        )}
      </div>
    );
  }


export default Stars;
