import {connect} from 'react-redux';
import ToDoApp from '../components/ToDoApp.js';
import {inputChange, inputSubmit,listItemClick,deleteListItem} from "../redux/modules/toDoApp";

function mapStateToProps(state) {
    return {
        toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputChange: (value) => dispatch(inputChange(value)),
        inputSubmit: () => dispatch(inputSubmit()),
        listItemClick :(i)=> dispatch(listItemClick(i)),
        deleteListItem:(i)=>dispatch(deleteListItem(i))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp);
