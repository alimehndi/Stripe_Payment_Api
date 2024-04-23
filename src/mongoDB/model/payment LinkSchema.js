import mongoose from "mongoose";

const paymentLinkSchema = mongoose.Schema({
    _id : {type :String, require: true},
    object: {type : String, default :"payment_link"},
    active :{type :Boolean ,default : true},
    after_completion : {
         hosted_configuration : { 
            custom_message : { type : String}
         },
         type : {type: String, default : "hosted_configuration"}
    },
    allow_promotion_codes : { type: Boolean, default: false},
    application_fee_amount: { type :String},
    application_fee_percent: {type : String},
    automatic_tax : {
        enabled : { type: Boolean, default: false },
        liability : {type: String}
    },
    billing_address_collection: {type: String, default: "auto"},
    consent_collection: { type: String, default: "auto"},
    currency: { type: String, default: "usd"},
    custom_fields: [{type:String}],
    custom_text: {
        shipping_address: { type: String},
        submit: {type: String},
    },
    customer_creation: {type:String, enum: ['if_required',] , default: 'if_required'},
    invoice_created:{
        account_tax_ids : {type: String},
        custom_fields: {type: String},
        descriptions: { type: String},
        footer: { type: String},
        metadata: {type : Map, of:String},
        rendering_options: {type: Strings}
    },
    livemode:{type: Boolean, default:false},
    metadata: {type : Map, of:String},
    on_behalf_of: {type: String},
    payment_intent_data: {type: String},
    payment_method_collection: {type: String, enum:['always'],default:'always'},
    payment_method_types: {type: String},
    phone_number_collection: {
        enabled: {type: Boolean, default: false},
    },
    shipping_address_collection: {type: String},
    shipping_option: [{type: String}],
    submit: {type: String, enum: ['auto'], default: 'auto'},
    subscription_data: {
        description: {type: String},
        invoice_settings : {
            issuer: {
                type: {type: String, enum: ['self'],default: 'self'}
            }
        },
        trial_period_days: {type: Number},
    },
    tax_id_collector: {
        enabled: {type: Boolean, default: false},
    },
    transfer_data: {type: String},
    url: {type:String, require:true}
})

const PaymentLink = mongoose.model('PaymentLink',paymentLinkSchema);
export default PaymentLink;