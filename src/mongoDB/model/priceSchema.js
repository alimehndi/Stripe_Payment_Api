import mongoose from "mongoose";


const priceSchema = mongoose.Schema({
    id :  {type : String},
    object :{type : String, default :"price" },
    active :{type :Boolean ,default : true},
    billing_scheme:{type : String, default :"per_unit" },
    created:{type : Number, require : true},
    currency:{type:String , default: "usd"},
    custom_unit_amount : {},
    livemode:{type: Boolean, default:false},
    lookup_key : {},
    metadata:{type : Map, of:String,default:{}},
    nickname : {type : String},
    product: { type: String, required: true},
    recurring :
                {
                    aggregate_usage : {type : String , enum : ['last_during_period', 'last_ever', 'max', 'sum'], default :'sum'},
                    interval : {type :String , enum :['day', 'week','month', 'year']},
                    interval_count : {type : Number},
                    trial_period_days : {type : Number },
                    usage_type: {type :String, enum : ['metered','licensed'],default : 'licensed'},
                },
    tax_behavior : {type : String, enum : ['exclusive','inclusive','unspecified'],default:'unspecified'},
    tiers_mode : {type :String, enum : ["graduated" , "volume"]},
    transform_quantity : {type :String },
    type : {type :String, enum : ["one_time" , "recurring"]},
    unit_amount : {type: Number},
    unit_amount_decimal : {type : String},            
});

const Price = mongoose.model('Price',priceSchema);

export default Price;
