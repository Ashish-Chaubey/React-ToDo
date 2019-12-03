import React from 'react';
import moment from 'moment';

import './App.css';
import TodoItem from './TodoItem'
import dataJSON from './dataFile'
import $ from 'jquery'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: dataJSON
    }
    this.newTodo = "";
    this.handleChange = this.handleChange.bind(this);
    this.updateText = this.updateText.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  addTodo(newTodoData) {
    $('#exampleModal').hide('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    const timeOfTodo = new Date();
    const newData = {
      "userId": 1,
      "id": dataJSON.length + 1,
      "title": newTodoData,
      "completed": false,
      "time": moment().format('LT')
    }
    dataJSON.push(newData);
    this.setState(prevState => {
      return {
        todos: dataJSON
      }
    })
  }

  updateText(event) {
    this.newTodo = event.target.value;
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column box-1">
        <div className="box-2">
          <div className="box-3">
            <div className="row pt-5 justify-content-between align-items-center">
              <div>
                <h3>{moment().format('dddd, Do MMM')}</h3>
              </div>
              <div>
                <div >
                  <div className="d-flex justify-content-center align-items-center rounded-circle" style={{ width: "80px", height: "80px", backgroundColor: "#5b75e3" }}>
                    <p className="add" data-toggle="modal" data-target="#exampleModal">+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {this.state.todos.length ? <p className="h4" style={{ color: "#5b75e3" }}>{this.state.todos.length} tasks</p> : <p className="h4" style={{ color: "#5b75e3" }}>Task list is empty</p>}

            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header border-0">
                    <h5 className="modal-title" id="exampleModalLabel">Enter Task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <input type="text" style={{ width: "100%" }} onChange={this.updateText}></input>
                    </form>
                  </div>
                  <div className="modal-footer border-0">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => { this.addTodo(this.newTodo) }}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container m-5"></div>
            {this.state.todos.length ? todoItems : <p className="h1 text-center">Get Started</p>}

          </div>

        </div>

      </div>
    );
  }

}

export default App;
