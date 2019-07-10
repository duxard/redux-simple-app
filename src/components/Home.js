import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1>Home page</h1>
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