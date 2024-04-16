import express from "express";
import { PriceRouter } from "./routes/priceRoutes.js";
import { PaymentRouter } from "./routes/paymentRoutes.js";
import { ProductRouter } from "./routes/productRoutes.js";
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
const port = 8001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.get('/',(req,res) => {
    res.send('Express server ');
})
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use('/v1/payment_links',PaymentRouter); 
app.use('/v1/prices',PriceRouter); 
app.use('/v1/products' , ProductRouter); 



//# sourceMappingURL=app.mjs.map