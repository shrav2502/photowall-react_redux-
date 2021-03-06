import React, { Component } from "react";

export default class Comments extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = e.target.elements.comment.value;
    this.props.addComment(comment, this.props.id);
    e.target.elements.comment.value = "";
  }
  render() {
    console.log(this.props.comments);
    return (
      <div className="comment">
        {this.props.comments.map((comment, index) => {
          return <p key={index}>{comment}</p>;
        })}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="comment" name="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
