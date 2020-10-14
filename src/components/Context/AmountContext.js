import React, { useState, createContext } from "react";

export const AmountContext = createContext();

export const AmountProvider = (props) => {
    const [amountList, setamountList] = useState([
        {
            index: Math.random(),
            lotNo: "",
            quantity: "",
            rate: "",
            amountBefore: 0,
        },
    ]);
    const [finalAmount, setFinalAmount] = useState({
        overAllAmount: '',
        sgst: '',
        cgst: '',
        amountAfterTax: '',
        tds: '',
        totalAmount: ''
    })
    return (
        <AmountContext.Provider value={[amountList, setamountList, finalAmount, setFinalAmount]}>
            {props.children}
        </AmountContext.Provider>
    );
};
