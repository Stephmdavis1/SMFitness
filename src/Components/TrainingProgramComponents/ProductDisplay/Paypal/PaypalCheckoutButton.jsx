import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import React, { useState } from 'react'

const PaypalCheckoutButton = (props) => {
    const {program} = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        setPaidFor(true);
    }

    if (paidFor){
        alert("Thank you for purchasing from Stephanie Marie Fitness");
    }
    if(error){
        alert(error);
    }

  return (
    <PayPalScriptProvider>
        <PayPalButtons 
        style={{
        color:  'black',
        shape:  'pill',
        tagline: 'false',
        }}

        onClick={(data, actions) => {
            const hasAlreadyBoughtCourse = false;
            if(hasAlreadyBoughtCourse){
                setError("You have previously purchased this program");
                return actions.reject();
            }else{
                return actions.resolve();
            }
        }}

            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: program.description,
                            amount: {
                                value: program.price,
                            },
                        },
                    ],
                });
            }}  
            onApprove = { async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);

                handleApprove(data.orderID);
            }}
            onCancel ={() => {}}
            onError={(err) => {
                setError(err);
                console.log("PayPal Checkout onError", err);
            }}
        />

    </PayPalScriptProvider>
  )
}

export default PaypalCheckoutButton