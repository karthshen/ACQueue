import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {

    const { counters, onIncrement, onDecrement, onDelete, onReset } = this.props;

    return (
      <React.Fragment>
        <div>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            ></Counter>
          ))}
        </div>
        <button
          onClick={onReset}
          className="btn btn-danger btn-la m-2"
        >
          Reset
        </button>
      </React.Fragment>
    );
  }
}

export default Counters;
