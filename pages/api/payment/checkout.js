const stripe = require("stripe")(
  "sk_test_51IwD4EEQXAi5K2UPbF8AZYc6t3bwMeSKnGTrWOiQlaPB9iAASDH6akwI7FpDVqi3ZRI04EELViUZ77RF8sSYuveP00SsXN4qjj"
);

export default async function handler(req, res) {
  const { items } = req.body;
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: JSON.parse(items),
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.json(session.url);
    } catch (err) {
      console.log(err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
