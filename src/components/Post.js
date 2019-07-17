import React from 'react';
import { connect } from 'react-redux';
import  { deletePost } from '../actions/postAction';

class Post extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deletePost(this.props.posts._id);
    this.props.history.push('/');
  }

  render() {
    const post = this.props.posts ? (
      <div>
        <h4>{this.props.posts.title}</h4>
        <p>{this.props.posts.text}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>Delete post</button>
        </div>
      </div>
    ) : (
      <p>Posts hasn't been loaded. Reach out to support</p>
    );

    return (
      <div>
        { post }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    posts: state.posts.find(entity => entity._id === id)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
