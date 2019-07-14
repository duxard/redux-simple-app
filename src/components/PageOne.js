import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../actions/postAction';
import './css/pageone.css';

class PageOne extends React.Component {
  constructor() {
    super();

    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleInc() {
    this.props.incrementCounter();
  }

  handleDec() {}

  render() {
    return (
      <div>
        <p>lorem ipsum</p>
        <button onClick={this.handleInc}>Inc</button>
        <button onClick={this.handleDec}>Dec</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => {
      dispatch(incrementCounter());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);
