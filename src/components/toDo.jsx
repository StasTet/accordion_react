import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as toDoActions from '../actions/todo/toDoActions.js';
import { ADD_TODO, DEL_TODO } from '../constants';

class ToDo extends Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);

    }
    
    addTodo() {
        (this.todoInput.value.trim() != 0) && this.props.toDoActions.addToDo(ADD_TODO, this.todoInput.value);
        this.todoInput.value = '';
    }

    delTodo(id) {
        this.props.toDoActions.delTodo(DEL_TODO, id);
    }

    render() {
        return (
            <div className="wrapper__article">
                <h1>To Do list</h1>
                <div className="todo__inner todo">
                    <div className="todo__panel panel">
                        <input className="panel__input" type="text" ref={ (input) => this.todoInput = input } placeholder="Input your ToDo"/>
                        <div className="panel__buttont" onClick={this.addTodo}></div>
                    </div>

                    <ul className="todo__container item">
                        {
                            this.props.todo.map((item, index) => {
                                return (
                                    <li key={item.id} className="item__list">
                                        <span className="item__text">{item.text}</span>
                                        <div onClick={ () => this.delTodo(item.id) } className="item__delete"></div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.toDo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toDoActions: bindActionCreators(toDoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);