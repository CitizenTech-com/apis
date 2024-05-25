import express, { Request, Response, NextFunction } from "express";
import memberRoutes from "./routes/members-routes";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "CitiExchange APIs with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "CitiExchange",
        url: "https://thecitizen.tech",
        email: "info@thecitizen.tech",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://main.d3bdzwvpfqhcgd.amplifyapp.com",
      },
    ],
  },
  apis: ["src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.json({ limit: "10mb" }));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = ["http://localhost:3000"];
  const origin = req.headers.origin ?? "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Type, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

/** Routes */
app.use("/members", memberRoutes);
/** Routes */

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
