import mongoose from "mongoose";

const paymentIntentSchema = new mongoose.Schema({}, { strict: false });

// Create a model using the dynamic schema
const PaymentIntents = mongoose.model('PaymentIntents',paymentIntentSchema );

export default PaymentIntents;

