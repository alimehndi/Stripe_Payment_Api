import Stripe from 'stripe';
import express from 'express'
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
import Event from '../mongoDB/model/eventSchema.js';
import dotenv from 'dotenv';

dotenv.config();

import connectDB from "../mongoDB/connectDB.js";
connectDB();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_f5a0dd32a70760605acdef6c19fc91c41c45eb1ab70be13a469e9da8b95a1e47";

app.post('/webhook', express.raw({type: 'application/json'}), async (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  try {
    
     await Event.create({...event});
     console.log("Event data inserted successfully.");
  } catch (error) {
    console.error("Error inserting Event data:", error);
  }

  // Handle the event
  switch (event.type) {
    case 'invoice.payment_succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));