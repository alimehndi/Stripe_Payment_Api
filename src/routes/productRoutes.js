import Stripe from 'stripe';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/',async(req,res) => {
  try {
    const { name } = req.body;
    const product = await stripe.products.create({
      name: name,
    });
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ success: false, error: "Failed to create product" });
  }

});
router.post('/:id',async(req,res) => {
  try {
    const { productId, metadata } = req.body;
    const product = await stripe.products.update(
      productId,
      {
        metadata: metadata,
      }
    );
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error updating product metadata:", error);
    res.status(500).json({ success: false, error: "Failed to update product metadata" });
  }
});
router.get('/:id',async(req,res) => {
  try {
    const productId = req.params.productId;
    const product = await stripe.products.retrieve(productId);
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ success: false, error: "Failed to retrieve product" });
  }
});
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

router.delete('/:id',async(req,res) => {
   
  try {
    const productId = req.params.productId;
    const deleted = await stripe.products.del(productId);
    res.status(200).json({ success: true, deleted });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, error: "Failed to delete product" });
  }

});



export { router as ProductRouter }; 