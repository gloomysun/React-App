import React from 'react';
import List from "./List";
import Input from "./Input";

class ToDoApp extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My TO DO app</h1>
                            <hr/>
                            <List listItems={this.state.list} onClick={this.onListItemClick}
                                  deleteListItem={this.deleteListItem}/>
                            <Input item={this.state.newToDo} onChange={this.onInputChange}
                                   onClick={this.onInputSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillMount() {
        this.setState({
            list: [],
            newToDo: 'test'
        })

    };

    onInputChange = (event) => {
        console.log(event.target.value)
        this.setState({newToDo: event.target.value})
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        this.setState((previousState) => ({
            list: [...previousState.list, {item: previousState.newToDo, done: false}],
            newToDo: ""
        }))
    }

    onListItemClick = (i) => { // takes the index of the element to be updated
        this.setState((previousState) => ({
            list: [
                ...previousState.list.slice(0, i), // slice returns a new array without modifying the existing array. Takes everything up to, but not including, the index passed in.
                Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}), // Object.assign is a new ES6 feature that creates a new object based on the first param (in this case an empty object). Other objects can be passed in and will be added to the first object without being modified.
                ...previousState.list.slice(i + 1) // takes everything after the index passed in and adds it to the array.
            ]
        }))
    };

    deleteListItem = (i) => {
        this.setState((previousState) => ({
            list: [
                ...previousState.list.slice(0, i),
                ...previousState.list.slice(i + 1)
            ]
        }))
    }


}

export default ToDoApp;