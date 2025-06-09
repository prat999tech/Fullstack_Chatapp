/*import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"

const app = express()

// Middleware setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())
app.use(express.json({limit: "10kb"}))
app.use(express.urlencoded({extended: true, limit: "10kb"}))

console.log("App loaded successfully");

// Import routes AFTER middleware setup
import userRoutes from "./routes/user.routes.js"

// Register routes
app.use("/api/user", userRoutes)
console.log("User routes registered successfully");

export { app }
*/

import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"

const app = express()

// Set up ALL middleware FIRST
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())
app.use(express.json({limit: "10kb"}))
app.use(express.urlencoded({extended: true, limit: "10kb"}))

// Add debugging middleware
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
});

console.log("App middleware loaded successfully");

// Import routes AFTER middleware setup
import userRoutes from "./routes/user.routes.js"

// Register routes
app.use("/api/user", userRoutes)
console.log("User routes registered successfully");

// Add 404 handler at the end
app.use('/*path', (req, res) => {

    console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ 
        error: "Route not found",
        method: req.method,
        path: req.originalUrl
    });
});

export { app }

