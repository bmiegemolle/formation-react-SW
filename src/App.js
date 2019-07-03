import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Task from './Task';
import {updateTasks} from './actions/todolist';
import _ from 'lodash';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };    
  }

  handleToggle = (task, index) => {
    const newTasks = _.cloneDeep(this.props.tasks);
    newTasks[index].done = !task.done;
    this.props.updateTasks(newTasks);
  }

  handleNewTaskChange = (event) => {
    this.setState({newTask: event.target.value});
  }

  handleNewTaskSubmit = (event) => {
    event.preventDefault();
    this.props.updateTasks([...this.props.tasks, {
      name: this.state.newTask, 
      done: false}
    ]);
    this.setState({
      newTask: ''
    });
  }

  render() {
    return (
      <div className="App">
        {this.props.tasks.map((task, index) => (
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

const mapStateToProps = (state)=>{
  return{
    tasks: state.tasks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTasks: (tasks) => dispatch(updateTasks(tasks)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
