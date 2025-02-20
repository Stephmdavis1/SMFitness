import { PayPalButtons } from "@paypal/react-paypal-js";


const PayPalPayment = () => {

    const serverUrl = "http://localhost:8888/"

   const createOrder = (data) => {
    return fetch(`${serverUrl}/my-server/create-paypal-order`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            product: [
                {
                    description: description,
                    price: "49.99",
                },
            ],
        }),
    })
    .then((response) => response.json())
    .then((order) => order.id);
   }
   const onApprove = (data) => {
    return fetch(`${serverUrl}/my-server/create-paypal-order`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderID: data.orderID
        })
    }) .then((response) => {
        console.log("Payment Successful", response.json());
        response.json();
    });
};
   

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