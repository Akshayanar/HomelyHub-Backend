import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./utils/db.js";

import { router } from "./routes/userRoutes.js";
import { propertyRouter } from "./routes/propertyRouter.js";
import { bookingRouter } from "./routes/bookingRouter.js"; 
import { tripRouter } from "./routes/tripRouter.js";

dotenv.config();

const app = express();   

// ✅ Enable CORS (Allows your Vercel frontend to talk to this backend)
app.use(cors({
    origin: ["https://homely-hub-beta.vercel.app", "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
}));

// express.json
app.use(express.json({ limit: "100mb" }));

// urlencoded 
app.use(express.urlencoded({ limit: "100mb", extended: true }));

// cookie parser  
app.use(cookieParser());

const port = process.env.PORT || 8080;    

// test route
app.get("/", (req, res) => {
    res.send("HomelyHub Backend is running");
});

app.use("/api/v1/user", router);
app.use("/api/v1/rent/listing", propertyRouter);
app.use("/api/v1/rent/user/booking", bookingRouter);
app.use("/api/v1/rent/trip", tripRouter);

connectDB();

app.listen(port, () => {
   console.log(`App is running on port number:${port}`);
});
