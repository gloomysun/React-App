const initialState = {
    list: [{item: 'test', done: false}],
    newToDo: ''
};

const INPUT_CHANGED = 'INPUT_CHANGED';
const INPUT_SUBMIT = "INPUT_SUBMIT";
const LISTITEM_CLICK = "LISTITEM_CLICK";
const LISTITEM_DELETE = "LISTITEM_DELETE";

export function inputChange(newToDo) {
    return {
        type: INPUT_CHANGED,
        value: newToDo
    }
}

export function inputSubmit() {
    return {
        type: INPUT_SUBMIT,
    }
}

export function listItemClick(i) {
    return {
        type: LISTITEM_CLICK,
        value: i
    }
}

export function deleteListItem(i) {
    return {
        type: LISTITEM_DELETE,
        value: i
    }
}

export default function reducer(state = initialState, action) { // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
    switch (action.type) {
        case INPUT_CHANGED:
            return Object.assign(
                {},
                state,
                {newToDo: action.value}
            )
        case INPUT_SUBMIT:
            return Object.assign(
                {},
                state,
                {list: [...state.list, {item: state.newToDo, done: false}], newToDo: ""}
            )
        case LISTITEM_CLICK:
            return Object.assign(
                {},
                state,
                {
                    list: [
                        ...state.list.slice(0, action.value),
                        Object.assign({}, state.list[action.value], {done: !state.list[action.value].done}),
                        ...state.list.slice(action.value+1)
                    ]
                }
            );
        case LISTITEM_DELETE:
            return Object.assign(
                {},
                state,
                {
                    list: [
                        ...state.list.slice(0, action.value),
                        ...state.list.slice(action.value+1)
                    ]
                }
            );
        default:
            return state;
    }
}
