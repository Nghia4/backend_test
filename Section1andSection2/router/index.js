import express from 'express'
import customerRouter from './customer.router.js'
import adminRouter from './admin.router.js'
import agencyRouter from './agency.router.js'
import personRouter from './personalinformation.router.js'
import productRouter from './product.router.js'
import cartRouter from './cart.router.js'
import billingRouter from './billing.router.js'
import transactionRouter from './transaction.router.js'

const router = express.Router();

const Route = (app) => {
    router.use('/customers', customerRouter);
    router.use('/agencies', agencyRouter);
    router.use('/admins', adminRouter)
    router.use('/personinfo', personRouter);
    router.use('/products', productRouter);
    router.use('/carts', cartRouter);
    router.use('/billings', billingRouter);
    router.use('/transactions', transactionRouter)
    return app.use("/", router)
}

export default Route