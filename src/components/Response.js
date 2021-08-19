import React, { Component } from "react";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import "../styles/styles.css";
class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: props.response,
    };
  }

  render() {
    let response = this.state.response;
    if (response !== undefined) {
      return (
        <div>
          <ForumRoundedIcon className="chat-icon" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Response;
