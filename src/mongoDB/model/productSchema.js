import  mongoose  from "mongoose";

const productSchema = new mongoose.Schema({

    _id :  {type : String, require : true},
    object :{type : String, default :"product" },
    active :{type :Boolean ,default : true},
    created:{type : Number, require : true},
    default_price :{type: Number, default:null},
    description :{type :String},
    images : [ {type : String}],
    features:[{type: String}],
    livemode:{type: Boolean, default:false},
    metadate:{type : Map, of:String},
    name: {type : String, require: true},
    package_dimensions : {type: String, default:null},
    shippable:{type :Boolean },
    statement_descriptor:{},
    tax_code : {type : String},
    unit_label: {type:String},
    updated:{type:Number,require:true},
    url:{type : String}
})

const Product = mongoose.model('Product',productSchema);
export default Product;