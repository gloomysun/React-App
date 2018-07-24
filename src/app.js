import React from "react";
import ReactDOM from "react-dom";
import DDD from "./components/ToDoApp";

class App extends React.Component {
    render() {
        return (<div>
            Hello World
        </div>)
    }
}

ReactDOM.render(<DDD/>,
    document.getElementById("app"))