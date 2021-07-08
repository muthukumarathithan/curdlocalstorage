import React, { Component } from "react";

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default CreateTask;
