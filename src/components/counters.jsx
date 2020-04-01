import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  state = {
    inputField: ""
  }

  updateInput = (evt) => {
    this.setState({ inputField: evt.target.value });
  }

  handleAddNewItem = () => {
    this.props.onAdding(this.state.inputField);
    this.setState({ inputField: "" });
    document.getElementById("inputForm").reset();
  }

  handlePostNewItem = async () => {
    await fetch('https://acqbackend.herokuapp.com/addUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: this.state.inputField
      }),
    });

    this.setState({ inputField: "" });
    document.getElementById("inputForm").reset();

    this.props.update();
  }

  handleGetRemoveByName = async (name) => {
    await fetch('https://acqbackend.herokuapp.com/removeUserByName?name='.concat(name), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    this.props.update();
  }

  handleGetServerClearList = async () => {
    await fetch('https://acqbackend.herokuapp.com/clearUserList', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    this.props.update();
  }

  render() {

    const { counters, onIncrement, onDecrement, onDelete, onReset, onAdding, onClear } = this.props;

    return (
      <React.Fragment>
        <div>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.handleGetRemoveByName}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            ></Counter>
          ))}
        </div>
        <div className="input-group">
          <span className="input-group-btn">
            <button
              onClick={this.handlePostNewItem.bind(this)}
              className="btn btn-success btn-la m-2"
            >Add</button>
          </span>
          <form className="col-xs-2 m-2" id="inputForm">
            <input type="text" onChange={this.updateInput} className="form-control" placeholder="Name"></input>
          </form>
        </div>
        <button
          onClick={onReset}
          className="btn btn-warning btn-la m-2"
        >
          Reset
        </button>
        <button
          onClick={this.handleGetServerClearList}
          className="btn btn-danger btn-la m-2">Clear</button>
      </React.Fragment>
    );
  }
}

export default Counters;
