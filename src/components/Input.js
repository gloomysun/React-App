import React from "react";

const Input = (props) => {
    return (
        <form>
            <div
                className="form-group">
                <label
                    htmlFor="listInput">
                    Email address
                </label>
                <input onChange={props.onChange} value={props.item}
                    type="text"
                    className="form-control"
                    id="listItemInput"
                    placeholder="Add new todo"
                />
                <button onClick={props.onClick}
                    className="btn btn-primary">
                    Add Item
                </button>
            </div>
        </form>
    )
}

export default Input;