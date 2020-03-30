import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.initialValue,
    fontSize: this.props.counter.fontSize,
    tags: ["List1"]
  };

  styles = {
    fontSize: this.state.fontSize,
    fontWeight: "bold"
  };

  render() {
    return (
      //   <React.Fragment>
      //     <span style={this.styles} className={this.getBadgeClasses()}>
      //       {this.formatCount()}
      //     </span>
      //     <button className="btn btn-secondary btm-sm">Increment</button>
      //   </React.Fragment>
      //<div>{this.renderTags()}</div>

      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatValue()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-success btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ value: ++this.state.value });
  };

  handleDecrement = () => {
    if (this.state.value != 0) this.setState({ value: --this.state.value });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const value = this.state.value;

    if (value === 0) {
      return "Zero";
    } else {
      return value;
    }
  }

  renderTags() {
    if (this.state.tags.length === 0)
      return (
        <React.Fragment>
          <p>Please create a new Tag</p>
          <p>There are no tags</p>
        </React.Fragment>
      );

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleReset() {
    this.setState({ value: 0 });
  }
}

export default Counter;
