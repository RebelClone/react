import React from 'react'

const todayDate = ()=>{
    const date = new Date()
    const ddmmyyyy = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    return prependZero(ddmmyyyy)
}

const prependZero = date =>{
    let arrDate = date.split('-')
    let ddmmyyyy = []
    for(let i = 0; i < 3; i++){
         if(arrDate[i].length < 2){
             ddmmyyyy.push(`0${arrDate[i]}`)
             continue
         }
         ddmmyyyy.push(arrDate[i])
    }
    return ddmmyyyy.join('-')
}

const DateNow = () => {
    return (
        <div className="col">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span  className="input-group-text">Date</span>
                </div>
                <input type="text" className="form-control"
                value={todayDate()} disabled/>
            </div>
        </div>
    )
}

export default DateNow
