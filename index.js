import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import docs from "./BillgateAPI.json" with {type: "json"};
import bodyParser from "body-parser";

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 2001;
dotenv.config();

app.use(cors());
app.use(
  "/",
  swaggerUI.serve,
  swaggerUI.setup(docs, { customCssUrl: CSS_URL })
);

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
