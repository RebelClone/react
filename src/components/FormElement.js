import React, { useContext, Fragment } from "react";
import LotNumber from "./InvoiceComponent/LotNumber";
import Quantity from "./InvoiceComponent/Quantity";
import Rate from "./InvoiceComponent/Rate";
import Amount from "./InvoiceComponent/Amount";
import AddLot from "./InvoiceComponent/AddLot";
import { AmountContext } from "./Context/AmountContext";

const FormElement = () => {
    const [amountList, setamountList] = useContext(AmountContext);

    const onFormChange = (e) => {
        if (["lotNo", "quantity", "rate"].includes(e.target.name)) {
            amountList[e.target.dataset.key][e.target.name] = e.target.value;
            if (
                amountList[e.target.dataset.key].rate !== "" &&
                amountList[e.target.dataset.key].quantity !== ""
            ) {
                amountList[e.target.dataset.key].amountBefore =
                    amountList[e.target.dataset.key].rate *
                    amountList[e.target.dataset.key].quantity;
                setamountList((prevState) => [...prevState]);
            }
        } else {
            setamountList({
                [e.target.name]: e.target.value,
            });
        }
    };

    const addLot = () => {
        setamountList((prevState) => [
            ...prevState,
            {
                index: Math.random(),
                lotNo: "",
                quantity: "",
                rate: "",
                amountBefore: 0,
            },
        ]);
    };
    return (
        <Fragment>
            <form onChange={onFormChange} className="pt-2 form-element">
                {amountList.map((val, index) => {
                    return (
                        <div className="row mb-2" key={val.index}>
                            <LotNumber id={index} />
                            <Quantity id={index} />
                            <Rate id={index} />
                            <Amount
                                id={index}
                                amountBefore={val.amountBefore}
                            />
                        </div>
                    );
                })}
            </form>
            <AddLot addLot={addLot} />
        </Fragment>
    );
};

export default FormElement;
