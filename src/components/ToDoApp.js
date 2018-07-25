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
                            <List listItems={this.props.toDoApp.list} onClick={this.onListItemClick}
                                  deleteListItem={this.deleteListItem}/>
                            <Input item={this.props.toDoApp.newToDo} onChange={this.onInputChange}
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
        this.props.inputChange(event.target.value)
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.inputSubmit();
    }

    onListItemClick = (i) => { // takes the index of the element to be updated
        this.props.listItemClick(i);
    };

    deleteListItem = (i) => {
        this.props.deleteListItem(i);
    }
}

export default ToDoApp;