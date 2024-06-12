import Stripe from 'stripe';
import express from 'express'
import dotenv from 'dotenv';
import PaymentIntents from '../mongoDB/model/paymentIntentSchema.js';
dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/',async (req,res) => {
    try {
        const {amount, currency, enabled, capture_method, payment_method_options}  = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount : amount,
            currency: currency,
            automatic_payment_methods : {
                enabled: enabled
            },
            capture_method :capture_method,
            payment_method_options:payment_method_options

          });
        
        try {
          await PaymentIntents.create({...paymentIntent});
          console.log("Payment Intent data inserted successfully.");
      } catch (error) {
          console.error("Error inserting PaymentIntent data:", error);
      }
    
        
        res.status(200).json({ success: true, paymentIntent });
      } catch (error) {
        console.error("Error creating payment Intent:", error);
        res.status(500).json({ success: false, error: "Failed to create payment Intent" });
      } 
})

router.post('/:id/capture', async (req,res) => {  
   
   const data = req.body;
   const id = req.params.id;
   console.log(data);
   console.log(id)
   try {
    const paymentIntent = await stripe.paymentIntents.capture(
      id,data
      
     ); 
     try {
      await PaymentIntents.create({...paymentIntent});
      console.log("Payment Intent data inserted successfully.");
  } catch (error) {
      console.error("Error inserting PaymentIntent data:", error);
  }

   res.status(200).json({success : true, paymentIntent})
   } catch (error) {
    
    console.log('Error capturing Amount',error);
    res.status(500).json({success: false, error : "Failed to capture the AMOUNT"});
   }
   

})

router.post('/:id/confirm', async (req,res) => {
  const id = req.params.id;
  const {payment_method,payment_method_options, return_url} =req.body;
  try {
  
  const paymentIntent = await  stripe.paymentIntents.confirm(id,
    {
      payment_method:payment_method,
      return_url:return_url,
      payment_method_options:payment_method_options
    }
  );

  try {
    await PaymentIntents.create({...paymentIntent});
    console.log("Payment Intent data inserted successfully.");
} catch (error) {
    console.error("Error inserting PaymentIntent data:", error);
}

 res.status(200).json({success : true, paymentIntent})
 } catch (error) {
  
  console.log('Error confirming ',error);
  res.status(500).json({success: false, error : "Failed to confirm the payment Intent",errors:error});
 }

})


router.get('/:id', async (req,res ) => {

  const paymentIntentId = req.params.id;
  
  
   try {
  
    const paymentIntent = await stripe.paymentIntents.retrieve(
      paymentIntentId 
     );
    
    try {
      await PaymentIntents.create({...paymentIntent});
      console.log("Payment Intent data inserted successfully.");
  } catch (error) {
      console.error("Error inserting PaymentIntent data:", error);
  }
  
   res.status(200).json({success : true, paymentIntent})
   } catch (error) {
    
    console.log('Error retrieving Payment Intent ',error);
    res.status(500).json({success: false, error : "Failed to retrieve the payment Intent",errors:error});
   }
  
})
router.post('/:id/cancel', async (req,res) => {  
   
  const data = req.body;
  const id = req.params.id;
  // console.log(data);
  // console.log(id)
   try {
   const paymentIntent = await stripe.paymentIntents.cancel(
     id,data
    ); 
    
  res.status(200).json({success : true, paymentIntent})
  } catch (error) {
   
   console.log('Error Cancelling ',error);
   res.status(500).json({success: false, error : "Failed to cancel"});
  }
})

export  {router as PaymentIntentsRouter} ;
