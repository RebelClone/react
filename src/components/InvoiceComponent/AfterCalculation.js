import React, { Fragment } from "react";

const AfterCalculation = props => {
    return (
        <Fragment>
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Amount</span>
                        </div>
                        <input
                            type="number"
                            id="total-amount"
                            className="form-control"
                            disabled
                            value={props.total.overAllAmount}
                        />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">SGST</span>
                        </div>
                        <input
                            type="number"
                            id="sgst"
                            className="form-control"
                            disabled
                            value={props.total.sgst}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">+2.5%</span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">CGST</span>
                        </div>
                        <input
                            type="number"
                            id="cgst"
                            className="form-control"
                            disabled
                            value={props.total.cgst}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">+2.5%</span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Amount After GST </span>
                </div>
                <input
                    type="number"
                    id="amount-after"
                    className="form-control"
                    disabled
                    value={props.total.amountAfterTax}
                />
            </div>
            <br />
            <div className="row">
                <div className="col-6">
                    {" "}
                    {/* change */}
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">TDS</span>
                        </div>
                        <input
                            type="number"
                            id="tds"
                            className="form-control"
                            disabled
                            value={props.total.tds}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">-1%</span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Total Amount</span>
                </div>
                <input
                    type="number"
                    id="final-amount"
                    className="form-control"
                    disabled
                    value={props.total.totalAmount}
                />
            </div>
        </Fragment>
    );
};

export default AfterCalculation;
