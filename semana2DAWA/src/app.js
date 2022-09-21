import express from "express";
import cors from "cors";
import { user } from "./components";
import { product } from "./components/index_prod";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", user);
app.use("/api/v1/product", product);