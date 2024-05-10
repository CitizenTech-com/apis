import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use((req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
  ];
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
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
