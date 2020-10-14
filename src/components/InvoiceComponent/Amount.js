import React from "react";

const Amount = (props) => {
    return (
        <div className="col pl-0 mb-res">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Amount</span>
                </div>
                <input
                    type="number"
                    name="amountBefore"
                    data-key={props.id}
                    className="form-control"
                    value={props.amountBefore}
                    disabled
                />
            </div>
        </div>
    );
};

export default Amount;
