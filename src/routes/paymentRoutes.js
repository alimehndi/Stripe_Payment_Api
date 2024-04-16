import Stripe from 'stripe';
import express from 'express'
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


router.post('/',async(req,res) => {
    try {
        const { line_items } = req.body;
        const paymentLink = await stripe.paymentLinks.create({
          line_items: line_items,
        });
        res.status(200).json({ success: true, paymentLink });
      } catch (error) {
        console.error("Error creating payment link:", error);
        res.status(500).json({ success: false, error: "Failed to create payment link" });
      }
});
router.post('/:id',async(req,res) => {
    try {
        const paymentLinkId = req.params.paymentLinkId;
        const { metadata } = req.body;
        const paymentLink = await stripe.paymentLinks.update(
          paymentLinkId,
          {
            metadata: metadata,
          }
        );
        res.status(200).json({ success: true, paymentLink });
      } catch (error) {
        console.error("Error updating payment link:", error);
        res.status(500).json({ success: false, error: "Failed to update payment link" });
      }
});
router.get('/:id/line_items',async(req,res) => {
    try {
        const paymentLinkId = req.params.paymentLinkId;
        const lineItems = await stripe.paymentLinks.listLineItems(paymentLinkId);
        res.status(200).json({ success: true, lineItems });
      } catch (error) {
        console.error("Error listing payment link line items:", error);
        res.status(500).json({ success: false, error: "Failed to list payment link line items" });
      }
});
router.get('/:id',async(req,res) => {
    try {
        const paymentLinkId = req.params.paymentLinkId;
        const paymentLink = await stripe.paymentLinks.retrieve(paymentLinkId);
        res.status(200).json({ success: true, paymentLink });
      } catch (error) {
        console.error("Error retrieving payment link:", error);
        res.status(500).json({ success: false, error: "Failed to retrieve payment link" });
      }
});
router.get('/',async(req,res) => {
    try {
        const paymentLinks = await stripe.paymentLinks.list({
          limit: 3,
        });
        res.status(200).json({ success: true, paymentLinks });
      } catch (error) {
        console.error("Error listing payment links:", error);
        res.status(500).json({ success: false, error: "Failed to list payment links" });
      }
});



export {router as PaymentRouter };
