import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {
    render() {
        console.log(this.props.posts);

        const post = this.props.posts ? (
            <div>
                <h4>{this.props.posts.title}</h4>
                <p>{this.props.posts.body}</p>
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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        posts: state.posts.find(entity => entity.id==+id)
    }
};

export default connect(mapStateToProps)(Post);