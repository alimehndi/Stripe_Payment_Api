import Stripe from 'stripe';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);



router.post('/',async(req,res) => {
    try {
        const { currency, unit_amount, interval, productName } = req.body;
        const price = await stripe.prices.create({
          currency: currency,
          unit_amount: unit_amount,
          recurring: {
            interval: interval,
          },
          product_data: {
            name: productName,
          },
        });
        res.status(200).json({ success: true, price });
      } catch (error) {
        console.error("Error creating price:", error);
        res.status(500).json({ success: false, error: "Failed to create price" });
      }
});

router.post('/:id',async(req,res) => {
    try {
        const priceId = req.params.priceId;
        const { metadata } = req.body;
        const price = await stripe.prices.update(
          priceId,
          {
            metadata: metadata,
          }
        );
        res.status(200).json({ success: true, price });
      } catch (error) {
        console.error("Error updating price:", error);
        res.status(500).json({ success: false, error: "Failed to update price" });
      }
});

router.get('/:id',async(req,res) => {
    try {
        const priceId = req.params.priceId;
        const price = await stripe.prices.retrieve(priceId);
        res.status(200).json({ success: true, price });
      } catch (error) {
        console.error("Error retrieving price:", error);
        res.status(500).json({ success: false, error: "Failed to retrieve price" });
      }
});

router.get('/',async(req,res) => {
    try {
        const prices = await stripe.prices.list({
          limit: 3,
        });
        res.status(200).json({ success: true, prices });
      } catch (error) {
        console.error("Error listing prices:", error);
        res.status(500).json({ success: false, error: "Failed to list prices" });
      }
});


export {router as PriceRouter  };