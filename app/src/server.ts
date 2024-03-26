import express from "express";
import { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";

export const app: Application = express();
import userRoutes from "./routes/UserRoutes";

app.use(bodyParser.json());
app.use(cors());
dotenv.config();
app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const port: number = 3000;

const router = express.Router();
userRoutes(router);
app.use("/api", router);

app.listen(port, async () => {
  console.log(`🗄️  Server Fire on http:localhost//${port}`);

  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("🛢️  Connected To Database");
  } catch (error) {
    console.log("⚠️ Error to connect Database");
  }
});
