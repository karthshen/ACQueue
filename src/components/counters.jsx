import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4, fontSize: 15 },
      { id: 2, value: 5, fontSize: 15 },
      { id: 3, value: 6, fontSize: 15 },
      { id: 4, value: 0, fontSize: 15 }
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
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
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

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  onIncrement = counter => {
    const counters = [...this.state.counters];
    counters[counters.indexOf(counter)].value++;
    this.setState({ counters: counters });
  };

  onDecrement = counter => {
    const counters = [...this.state.counters];
    counters[counters.indexOf(counter)].value--;
    this.setState(counters);
  };
}

export default Counters;
