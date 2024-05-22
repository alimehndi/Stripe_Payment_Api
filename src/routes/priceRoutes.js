import Stripe from 'stripe';
import express from 'express';
import dotenv from 'dotenv';
import Price from '../mongoDB/model/priceSchema.js'
import Product from '../mongoDB/model/productSchema.js';
dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


//add  a price to a product
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
        const product = await stripe.products.retrieve(price.product);
        try {
          await Product.create({...product});
          console.log("Product data inserted successfully.");
      } catch (error) {
          console.error("Error inserting Product data:", error);
      }
        
        try {
          await Price.create({  ...price });
          console.log("Price data inserted successfully.");
      } catch (error) {
          console.error("Error inserting Price data:", error);
      }

        res.status(200).json({ success: true, price });
      } catch (error) {
        console.error("Error creating price:", error);
        res.status(500).json({ success: false, error: "Failed to create price" });
      }
});

//update the price of products
router.post('/:id',async(req,res) => {
    try {
        const priceId = req.params.id;
        const { metadata } = req.body;
        const price = await stripe.prices.update(
          priceId,
          
          {
          
            metadata: metadata,
          }
        );
        const update = {
          ...req.body,
        };
        try {
          const newdata= await  Price.findOneAndUpdate({id: priceId},update,{new:true});
          console.log(newdata);
           console.log("Price data updated successfully.");
       } catch (error) {
           console.error("Error updating Price data:", error);
       }
        res.status(200).json({ success: true, price });
      } catch (error) {
        console.error("Error updating price:", error);
        res.status(500).json({ success: false, error: "Failed to update price" });
      }
});


//get the price by id
router.get('/:id',async(req,res) => {
    try {
        const priceId = req.params.id;
        const price = await stripe.prices.retrieve(priceId);
        res.status(200).json({ success: true, price });
      } catch (error) {
        console.error("Error retrieving price:", error);
        res.status(500).json({ success: false, error: "Failed to retrieve price" });
      }
});

//get the list of all products
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