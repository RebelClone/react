import React from 'react'

const Quantity = props => {
    return (
        <div className="col">
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Quantity</span>
                    </div>
                    <input name="quantity" data-key={props.id} type="number" className="form-control" maxLength="10" placeholder="Enter Quantity" />
                </div>
            </div>
        </div>
    )
}

export default Quantity
