import React from "react";

const Calculate = (props) => {
    return (
        <button
            onClick={props.calculateAmount}
            id="calculate"
            type="button"
            className="btn btn-info btn-lg btn-block mb-4"
        >
            <i className="fa fa-calculator" aria-hidden="true"></i>
            Calculate
        </button>
    );
};

export default Calculate;
