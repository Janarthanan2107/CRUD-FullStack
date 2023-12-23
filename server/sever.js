import express from "express"
import productRouter from "./routes/products.Route.js";
import userRouter from "./routes/users.Route.js"

const app = express()
const PORT = 5000;

// middleware to define the product router with application
app.use("/api/v1/products", productRouter)
app.use("/api/v1/users", userRouter);

// middleware for define the json formate
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening in the Port: ${PORT}`)
})