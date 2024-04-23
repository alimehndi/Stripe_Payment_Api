import  mongoose  from "mongoose";

const productSchema = new mongoose.Schema({

    _id:  {type : String},
    object :{type : String, default :"product" },
    active :{type :Boolean ,default : true},
    created:{type : Number, require : true},
    default_price :{type: Number, default:null},
    description :{type :String},
    images : [ {type : String}],
    features:[{type: String}],
    livemode:{type: Boolean, default:false},
    metadata:{type: Map, of: String ,default :{}},
    name: {type : String, require: true},
    package_dimensions : {type: String, default:null},
    shippable:{type :Boolean },
    statement_descriptor:{type: String},
    tax_code : {type : String},
    unit_label: {type:String, default: null},
    updated:{type:Number,require:true},
    url:{type : String,default: null}
})

const Product = mongoose.model('Product',productSchema);
export default Product;
