import React from 'react';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import axios from 'axios';

const pkstring: string = process.env
  .NEXT_PUBLIC_STRIPE_CLAVE_PUBLICABLE_TEST
  ? process.env.NEXT_PUBLIC_STRIPE_CLAVE_PUBLICABLE_TEST
  : '';
const stripePromise = loadStripe(pkstring);

export default ({ ...props }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    // Use your card Element with other Stripe.js APIs

    const { error, paymentMethod } = await stripe.createPaymentMethod(
      {
        type: 'card',
        card: elements.getElement(CardNumberElement),
      },
    );

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post('/api/stripe/pay', {
          id,
          amount: 1099,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log('[PaymentMethod]', paymentMethod);
    console.log('[Error]', error);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
/*
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});*/

/*

4208840966976723
10/23
281
*/
