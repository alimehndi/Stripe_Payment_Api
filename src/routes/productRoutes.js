import Stripe from 'stripe';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
import Product from '../mongoDB/model/productSchema.js'
//create a new product
router.post('/',async(req,res) => {
  try {
    const { name } = req.body;
    const product_ = await stripe.products.create({
      name: name,
    });
    console.log(product_);
    try {
      await Product.create({_id : product_.id,...product_});
      console.log("Product data inserted successfully.");
  } catch (error) {
      console.error("Error inserting Product data:", error);
  }
    
    res.status(200).json({ success: true, product_ });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ success: false, error: "Failed to create product" });
  }

});

// update a new product 
router.post('/:id',async(req,res) => {
  try {
    const productId = req.params.id;
    const { metadata } = req.body;
    const product = await stripe.products.update(
      productId,
      {
        metadata: metadata,
      }
    );
    const update = {
      metadata: metadata,
    };
    console.log(update)
    try {
     const newdata= await  Product.findByIdAndUpdate(productId,update,{new:true});
     console.log(newdata);
      console.log("Product data updated successfully.");
  } catch (error) {
      console.error("Error updating Product data:", error);
  }
    
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error updating product metadata:", error);
    res.status(500).json({ success: false, error: "Failed to update product metadata" });
  }
});


//get the product by product id
router.get('/:id',async(req,res) => {
  try {
    const productId = req.params.id;
    const product = await stripe.products.retrieve(productId);
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ success: false, error: "Failed to retrieve product" });
  }
});

//get all product List
router.get('/',async(req,res) => {
  try {
    const products = await stripe.products.list({
      limit: 3,
    });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error listing products:", error);
    res.status(500).json({ success: false, error: "Failed to list products" });
  }
});

//delete an existing Product
router.delete('/:id',async(req,res) => {
   
  try {
    const productId = req.params.id;
    const deleted = await stripe.products.del(productId);
    res.status(200).json({ success: true, deleted });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, error: "Failed to delete product" });
  }

});



export { router as ProductRouter }; 