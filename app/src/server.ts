import express from "express";
import { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// Create the express app and  import the type of app from express;
export const app: Application = express();
import userRoutes from "./routes/UserRoutes";

app.use(bodyParser.json());
// Cors
app.use(cors());
//configure env;
dotenv.config();
// Parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Declare The PORT Like This
const port: number = 3000;

// Routes
const router = express.Router();
userRoutes(router);
app.use("/api", router);

// Listen the server
app.listen(port, async () => {
  console.log(`🗄️  Server Fire on http:localhost//${port}`);

  // Connect To The Database
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("🛢️  Connected To Database");
  } catch (error) {
    console.log("⚠️ Error to connect Database");
  }
});
