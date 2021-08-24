import React, { Component } from "react";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import ReplyIcon from "@material-ui/icons/Reply";
import "../styles/styles.css";
import { format } from "date-fns";
import { Link } from "gatsby";

class DetailedResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      name: "",
      publishedAt: "",
      id: props.reviewId,
      responseExists: false,
      editMode: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    //handles local storage of responses to reviews
    const localObjForId = localStorage.getItem(
      "rev_track_id-" + this.props.reviewId
    );
    if (localObjForId !== null) {
      let localJSON = JSON.parse(localObjForId);
      this.state.response = localJSON.response;
      this.state.name = localJSON.name;
      this.state.publishedAt = localJSON.publishedAt;
    } else {
      this.state.editMode = true;
    }
  }

  //handles display of either review responses or the form to submit a response to review
  toggleEditMode = () => {
    if (this.state.editMode === true) {
      this.setState({ editMode: false });
    } else {
      this.setState({ editMode: true });
    }
  };

  //sets review response or edit to review response in local storage and updates display
  handleSubmit(event) {
    event.preventDefault();
    //handles date format for response to review
    let responseDate = format(new Date(), "MM/dd/yyyy");
    console.log(event.target.name.value)
    if (!event.target.name.value ){
      alert("Please add your name!")
      return
    }
    if (!event.target.message.value) {
      alert("Please add your comment!")
      return
    }
    const formObj = {
      name: event.target.name.value,
      response: event.target.message.value,
      publishedAt: responseDate,
    };
    localStorage.setItem(
      "rev_track_id-" + this.props.reviewId,
      JSON.stringify(formObj)
    );

    this.setState({
      name: formObj.name,
      response: formObj.response,
      published_at: responseDate,
    });
    this.toggleEditMode();
  }

  render() {
    if (this.state.editMode === false) {
      return (
        <div className="response-window">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Link to="/">
                <ReplyIcon className='reply-icon'  />
              </Link>
            </div>
            <div className='detail-main'>
              <div className="single-author-date-wrap">
                <div className="content">{this.state.response}</div>
                <button
                  className="ellipse-icon"
                  onClick={() => this.toggleEditMode()}
                >
                  <MoreHorizRoundedIcon style={{ fontSize: "3rem" }} />
                </button>
              </div>
              <div className="single-author-date-wrap">
                <div>{this.state.name}</div>
                <div>{this.state.publishedAt}</div>{" "}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="comment-form">
          <form onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              defaultValue={this.state.name}
            ></input>

            <input
              name="message"
              type="text"
              placeholder="Comment"
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
