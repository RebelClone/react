import React from "react";

const Rate = (props) => {
    return (
        <div className="col">
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Rate</span>
                    </div>
                    <input
                        name="rate"
                        data-key={props.id}
                        type="number"
                        className="form-control"
                        maxLength="10"
                        placeholder="Enter Rate"
                    />
                    <div className="input-group-append">
                        <span className="input-group-text">pcs</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rate;
