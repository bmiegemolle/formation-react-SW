import React from 'react';
import './App.css';
import Task from './Task';



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      tasks : [
        {name: "Learn React", done: false},
        {name: "Learn CSS", done: true},
        {name: "Web development", done: true}
      ],
      newTask: ""
    };    
  }

  handleToggle = (task, index) => {
    const newState = {...this.state};
    newState.tasks[index].done = !task.done;
    this.setState(newState);
  }


  handleNewTaskChange = (event) => {
    this.setState({newTask: event.target.value});
  }

  handleNewTaskSubmit = (event) => {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, {
        name: this.state.newTask, 
        done: false}],
      newTask: ""
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.tasks.map((task, index) => (
            <Task key={index} name={task.name} done={task.done} handleToggle={this.handleToggle.bind(this, task, index)}
            />
        ))}
        <form onSubmit={this.handleNewTaskSubmit}>
          <label>
            New task:
            <input type="text" value={this.state.newTask} onChange={this.handleNewTaskChange} />
          </label>
          <input type="submit" value="Add" />
        </form>

      </div>
    );
  }
}

export default App;
