import Stripe from 'stripe';
import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


router.post('/', async (req,res) => {
    const {success_url,payment_intent_data,line_items,mode} =req.body;
    
    try {
        const session = await stripe.checkout.sessions.create({
            success_url:success_url,
            line_items: line_items,
            payment_intent_data:payment_intent_data,
            mode:mode
        })
        res.status(200).json({ success: true, session });
      } catch (error) {
        console.error("Error creating session :", error);
        res.status(500).json({ success: false, error: "Failed to create session" });
      }
    
})

export {router as sessionRouter};