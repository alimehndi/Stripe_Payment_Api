import Stripe from 'stripe';
import express from 'express'
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


router.get('/:id', async (req,res) => {
    
  const eventId = req.params.id;
  
  
  try {
 
   
const event = await stripe.events.retrieve(
     eventId
    );
   
//    try {
//      await PaymentIntents.create({...paymentIntent});
//      console.log("Payment Intent data inserted successfully.");
//  } catch (error) {
//      console.error("Error inserting PaymentIntent data:", error);
//  }
 
  res.status(200).json({success : true, event})
  } catch (error) {
   
   console.log('Error retrieving event ',error);
   res.status(500).json({success: false, error : "Failed to retrieve the event",errors:error});
  }
 
})



export  {router as EventsRouter} ;
