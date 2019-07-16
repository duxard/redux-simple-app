import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postAction';

class CreateNewPost extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addPost(this.postTitle.value, this.postText.value);
    this.postTitle.value = "";
    this.postText.value = "";
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Title" id="title" type="text" ref={input => this.postTitle = input} />
                <label htmlFor="title">title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" ref={input => this.postText = input}></textarea>
                <label htmlFor="textarea1">Textarea</label>
              </div>
            </div>
            <input type="submit" value="Add post" className="btn" />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title, text) => {
      dispatch(addPost(title, text));
    }
  }
};

export default connect(null, mapDispatchToProps)(CreateNewPost);
