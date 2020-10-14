import React from 'react'

const DocumentNumber = () => {
    return (
        <div className="col">
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text">Document No.</span>
                </div>
                <input type="text" className="form-control" id="document-no" />
            </div>
        </div>
    )
}

export default DocumentNumber
