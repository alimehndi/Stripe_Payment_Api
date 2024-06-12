import Stripe from 'stripe';
import express from 'express'
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


router.get('/:id', async (req,res) => {
    
  const paymentMethodID = req.params.id;
  
  
  try {
 
   
    const paymentMethod = await stripe.paymentMethods.retrieve(
       paymentMethodID
      );  
//    try {
//      await PaymentIntents.create({...paymentIntent});
//      console.log("Payment Intent data inserted successfully.");
//  } catch (error) {
//      console.error("Error inserting PaymentIntent data:", error);
//  }
 
  res.status(200).json({success : true, paymentMethod})
  } catch (error) {
   
   console.log('Error retrieving Payment Method ',error);
   res.status(500).json({success: false, error : "Failed to retrieve the Payment Method",errors:error});
  }
 
})



export  {router as PaymentMethodRouter} ;
