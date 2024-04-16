import Stripe from 'stripe';
import express from 'express'
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

//list all the balance transactions 
router.get('/',async(req,res) => {
    try {
        
        const balanceTransactions = await stripe.balanceTransactions.list({
            limit: 3,
          });
        res.status(200).json({ success: true, balanceTransactions });
      } catch (error) {
        console.error("Error creating payment link:", error);
        res.status(500).json({ success: false, error: "Failed to fetch balance Transactions" });
      }
});

//list all the balance transactions 
router.get('/:id',async(req,res) => {
    try {
        const balanceTransactionId = req.params.id;
        const balanceTransaction = await stripe.balanceTransactions.retrieve(
            balanceTransactionId,
          );
        res.status(200).json({ success: true, balanceTransaction });
      } catch (error) {
        console.error("Error creating payment link:", error);
        res.status(500).json({ success: false, error: "Failed to fetch balance Transaction" });
      }
});



export {router as BalanceTransactionRouter};