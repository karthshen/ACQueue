import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, initialValue: 4, fontSize: 15 },
      { id: 2, initialValue: 5, fontSize: 15 },
      { id: 3, initialValue: 6, fontSize: 15 },
      { id: 4, initialValue: 0, fontSize: 15 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.handleDelete}
            ></Counter>
          ))}
        </div>
        <button
          onClick={this.handleReset}
          className="btn btn-danger btn-la m-2"
        >
          Reset
        </button>
      </React.Fragment>
    );
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters: counters });

    console.log(counterId, " deleted");
  };

  handleReset() {
    this.counter.handleReset();
  }
}

export default Counters;
