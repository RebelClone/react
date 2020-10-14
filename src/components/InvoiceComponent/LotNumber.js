import React from "react";

const LotNumber = (props) => {
    return (
        <div className="col">
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Lot No.</span>
                    </div>
                    <input
                        name="lotNo"
                        type="text"
                        data-key={props.id}
                        className="form-control"
                        placeholder="Enter Lot No."
                    />
                </div>
            </div>
        </div>
    );
};

export default LotNumber;
