

const PayPalPayment = () => {

   const createOrder = (data) => {
    return fetch("/my-server/create-paypal-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cart: [
                {
                    sku: "YOUR-PRODUCT-STOCK-KEEPING-UNIT",
                    quantity: "YOUR_PRODUCT_QUANTITY",
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
    <PayPalButton
    createOrder={(data) => createOrder(data, actions)}
    onApprove={(data) => onApprove(data, actions)}
    />
    </>
    );
}

export default PayPalPayment;