import React from "react";

class AddPhoto extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const imageLink = e.target.elements.Link.value;
    const description = e.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      imageLink: imageLink,
      description: description,
    };
    if (description && imageLink) {
      this.props.addPost(post);
      this.props.onHistory.push("/");
    }
    console.log(post);
  }
  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="Link" />
            <input type="text" placeholder="Description" name="description" />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
