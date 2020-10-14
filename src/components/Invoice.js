import React, { useContext } from "react";

import FormElement from "./FormElement";

import DocumentNumber from "./InvoiceComponent/DocumentNumber";
import DateNow from "./InvoiceComponent/DateNow";
import Calculate from "./InvoiceComponent/Calculate";
import AfterCalculation from "./InvoiceComponent/AfterCalculation";
import { AmountContext } from "./Context/AmountContext";

const Invoice = () => {
    const [amountList, setamountList, finalAmount, setFinalAmount] = useContext(
        AmountContext
    );

    const calculateAmount = () => {
        const amount = amountList
            .map(({ amountBefore }) => amountBefore)
            .reduce((preValue, cruValue) => (preValue += cruValue), 0);

        const overAllAmount = amount;
        const sgst = (amount * 0.025).toFixed(2);
        const cgst = sgst;
        const amountAfterTax = Math.round(amount * 1.05);
        const tds = Math.floor(amount * 0.01);
        const totalAmount = amountAfterTax - tds;

        setFinalAmount({
            overAllAmount,
            sgst,
            cgst,
            amountAfterTax,
            tds,
            totalAmount,
        });
        // console.log(overAllAmount, sgst, amountAfterTax, tds, totalAmount);
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="card">
                        <div className="card-header text-center h5">
                            Invoice
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <DocumentNumber />
                                <DateNow />
                            </div>
                            <hr />
                            <FormElement />
                            <Calculate calculateAmount={calculateAmount} />
                            <div className="calculation">
                                <AfterCalculation total={finalAmount} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
