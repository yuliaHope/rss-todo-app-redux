import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo as addTodoAction } from '../actions/todos';

export class AddTodoUI extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style= {{flex: '1'}}
                />
            </form>
        )
    }
}

AddTodoUI.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: title => {
      dispatch(addTodoAction(title))
    }
  }
}

const AddTodo = connect(
  null,
  mapDispatchToProps
)(AddTodoUI)


export default AddTodo;
