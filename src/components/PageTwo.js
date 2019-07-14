import React from 'react';
import { connect } from 'react-redux';

class PageTwo extends React.Component {
  render() {
    return (
      <div>
        <p>lorem ipsum dolores</p>
        <p>Counter: {this.props.counter}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

export default connect(mapStateToProps)(PageTwo);
