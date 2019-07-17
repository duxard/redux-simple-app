import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../actions/postAction';

import './css/home.css';

class Home extends React.Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <h2 className="center">Home page</h2>
        {
          this.props.posts.map((post, index) => {
            return (
              <div className="post" key={index}>
                <p className="title"><NavLink to={'/' + post._id}>{post.title}</NavLink></p>
                <p className="postContent">{post.text}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
