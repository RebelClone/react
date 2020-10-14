import React from 'react'

const AddLot = props => {
    return (
        <div className="float-right insert-here">
            <button onClick={props.addLot} type="button" className="btn btn-info mb-3">
                <i className="fa fa-plus"></i> 
                Add Lot
            </button>
        </div>
    )
}

export default AddLot
