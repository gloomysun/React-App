import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/ToDoAppContainer';
import configureStore from './redux/configureStore';



const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ToDoAppContainer />
    </Provider>,
    document.getElementById("app"))