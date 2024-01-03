import { stripe } from '@/utils/getStripe';

async function createCheckout(
  _: unknown,
  { productID = 'price_1OTznrIteEV6ZI74A16RHaAF' }: { productID: string },
) {
  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: productID,
          quantity: 1,
        },
      ],
      ui_mode: 'embedded',
      return_url:
        'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: `https://example.com/?canceled=true`,
    });
    return checkoutSession.url;
  } catch (error) {
    console.log({ error });
    throw error;
  }
}

export default createCheckout;
