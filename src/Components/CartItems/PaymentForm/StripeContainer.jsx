import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Q3QoORxHifnpxXm7wD0xsqfjwN4seP7GQOPHxOCKP0CFUCLF5XWvn94HOmN6CxWo43J4eRsVva1hxY6U4y1xLVn0039NtQW76l"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}