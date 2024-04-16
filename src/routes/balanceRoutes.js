import Stripe from 'stripe';
import express from 'express'
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

//generate a new payment link for the item
router.get('/',async(req,res) => {
    try {
        
        const balance = await stripe.balance.retrieve();
        res.status(200).json({ success: true, balance });
      } catch (error) {
        console.error("Error creating payment link:", error);
        res.status(500).json({ success: false, error: "Failed to fetch balance" });
      }
});

export {router as BalanceRouter};