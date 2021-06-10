import React from 'react'

export default function Payment() {
    return (
        <>
        <div className="paymentCont">
            <input type="text" placeholder="card number">card number</input>
            <input type="text" placeholder="cardholder Name ">Name on card</input>
            <input type="date" placeholder="M/M?YY ">Expiration Date</input>
            <input type="text" placeholder="CVV ">Security Code</input>
        </div>
        <button>Confirm Payment</button>
        
        </>
    )
}
