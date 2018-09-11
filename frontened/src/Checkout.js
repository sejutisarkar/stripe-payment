import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'EUR';
const euroToCent = amount => amount*100;

const successPayment = data => {
  alert('Payment Successful');
};

const faliurePayment = data => {
  alert("Payment Failed");
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
  {
    description,
    // image,
    source: token && token.id,
    amount: euroToCent(amount),
    currency: CURRENCY,
  })
  .then(successPayment)
  .catch(faliurePayment);
const Checkout = ({name, description, image,amount}) =>
  <StripeCheckout
    name={name}
    description={description}
    // image={image}
    stripeKey="pk_test_4vZznokAUixe5yJpI8tV9aoM"
    amount={euroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripe={STRIPE_PUBLISHABLE}
  />

  export default Checkout;
