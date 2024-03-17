const express = require('express');
const bodyParser = require('body-parser');
//const stripe = require('stripe')('your_stripe_secret_key_here');
import * as api  from '../api'

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define your subscription plans
const plans = {
  free: { name: 'Free Plan', price: 0, questionsPerDay: 1 },
  silver: { name: 'Silver Plan', price: 10000, questionsPerDay: 5 },
  gold: { name: 'Gold Plan', price: 100000, questionsPerDay: Infinity } // Infinity means unlimited
};

// Route for creating a subscription
app.post('/subscribe', async (req, res) => {
  const { plan, paymentMethod } = req.body;

  try {
    // Create customer
    const customer = await api.customers.create({
      payment_method: paymentMethod,
      invoice_settings: {
        default_payment_method: paymentMethod
      }
    });

    // Create subscription
    const subscription = await api.subscriptions.create({
      customer: customer.id,
      items: [{ price: plans[plan].price }]
    });

    res.json({ subscription });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route for posting questions
app.post('/post-question', async (req, res) => {
  const { subscriptionId } = req.body;

  try {
    // Retrieve subscription
    const subscription = await api.subscriptions.retrieve(subscriptionId);

    // Check subscription status and allow posting question accordingly
    const { questionsPerDay } = plans[subscription.plan.id];
    if (subscription.status === 'active') {
      // Logic to post question on Stack Overflow
      res.json({ message: `Question posted successfully. You have ${questionsPerDay} questions left for today.` });
    } else {
      res.status(403).json({ message: 'Your subscription is inactive. Please renew your subscription.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
