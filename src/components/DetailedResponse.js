import React, { Component } from "react";
import "../styles/styles.css";
class DetailedResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        response: props.response,
        id: props.review_id
    };
    console.log(this.state.id, 'id')
    this.handleSubmit.bind(this)
}
handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    console.log(this.props.review_id, 'id')
    localStorage.setItem(this.props.review_id, event.target );
    alert("Thanks for posting! 🙋‍♀️");
    form.reset();
}.bind(this)
render() {
      
    let response = this.state.response;
    console.log(  
        response, 'res')
    if (response !== 'undefined') {
      return <div className='response-window'>{response}</div>;
    } else {
      return (
        <div className="comment-form">
          <form onSubmit={this.handleSubmit}>
            <input name="name" type="text" placeholder="Name" />

            <textarea
              name="message"
              type="text"
              placeholder="Comment"
            ></textarea>

            <button type="submit">🗣 Post Comment 🗣</button>
          </form>
        </div>
      );
    }
  }
}

export default DetailedResponse;
