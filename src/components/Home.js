import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './css/home.css';

class Home extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                {
                    this.props.posts.map((post, index) => {
                        return (
                            <div className="post" key={index}>
                                <p className="title"><NavLink to={'/' + post.id}>{post.title}</NavLink></p>
                                <p className="pstContent">{post.body}</p>
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

export default connect(mapStateToProps)(Home);
