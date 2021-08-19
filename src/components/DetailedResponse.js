import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React, { Component } from "react";
import "../styles/styles.css";
class DetailedResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      name: "",
      published_at: "",
      id: props.review_id,
      responseExists: false,
      editMode: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // }

    //component did mount check local storage for response based on id
    // componentDidMount() {
    console.log("im in did mount");
    const localObjForId = localStorage.getItem(
      "rev_track_id-" + this.props.review_id
    );
    if (localObjForId !== null) {
      let localJSON = JSON.parse(localObjForId);
      this.state.response = localJSON.response;
      this.state.name = localJSON.name;
      this.state.published_at = localJSON.published_at;
      console.log(this.state.response);
    } else {
      this.state.editMode = true;
    }
  }
  toggleEditMode = () => {
    console.log("im in");
    if (this.state.editMode === true) {
      console.log(this.state.editMode);
      this.setState({ editMode: false });
    } else {
      // console.log(this.state.editMode)
      this.setState({ editMode: true });
    }
  };
  //toggle edit mode
  //make comment post and have form disappear
  handleSubmit(event) {
    event.preventDefault();
    const formObj = {
      name: event.target.name.value,
      response: event.target.message.value,
      published_at: new Date(),
    };
    localStorage.setItem(
      "rev_track_id-" + this.props.review_id,
      JSON.stringify(formObj)
    );
    this.setState({
      name: formObj.name,
      response: formObj.response,
      published_at: new Date().toString(),
    });
    this.toggleEditMode();
  }
  render() {
    let response = this.state.response;
    console.log("res", response);
    if (this.state.editMode === false) {
      return (
        <div className="response-window">
          <div>{this.state.response}</div>
          <div>{this.state.name}</div>
          <div>{this.state.published_at}</div>
          <button onClick={() => this.toggleEditMode()}>
            <MoreHorizIcon />
          </button>
        </div>
      );
    } else {
      return (
        <div className="comment-form">
          <form onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="name"
              defaultValue={this.state.name}
            ></input>

            <input
              name="message"
              type="text"
              placeholder="comment"
              defaultValue={this.state.response}
            ></input>

            <button type="submit">🗣 Post Comment 🗣</button>
          </form>
        </div>
      );
    }
  }
}
export default DetailedResponse;
