import { PayPalButtons } from "@paypal/react-paypal-js";


const PayPalPayment = () => {

   const createOrder = (data) => {
    return fetch("/my-server/create-paypal-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            product: [
                {
                    description: description,
                    price: new_price,
                },
            ],
        }),
    })
    .then((response) => response.json())
    .then((order) => order.id);
   }
   const onApprove = (data) => {
    return fetch("/my-server/create-paypal-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderID: data.orderID
        })
        })
        .then((response) => response.json());
    }
   

    return (
    <>
    <PayPalButtons
    createOrder={(data) => createOrder(data, actions)}
    onApprove={(data) => onApprove(data, actions)}
    />
    </>
    );
}

export default PayPalPayment;