import React, { Component } from "react";
import { Star } from "@material-ui/icons";

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: props.starCount,
    };
  }

  render() {
    return (
      <div>
        {Array(this.state.stars).fill(
          <Star className="material-icons" />
        )}
      </div>
    );
  }
}

export default Stars;
