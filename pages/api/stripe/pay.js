import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_CLAVE_SECRETA_TEST);
export default async (req, res) => {
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount: 170,
      currency: 'EUR',
      description: 'Delicious Empanadas',
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    return res.status(200).json({
      confirm: process.env.STRIPE_CLAVE_SECRETA_TEST,
      confirm2: process.env.STRIPE_CLAVE_PUBLICABLE_TEST,
    });
  } catch (error) {}
};
