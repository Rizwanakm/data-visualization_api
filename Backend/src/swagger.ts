// @ts-ignore
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

// Swagger options without type
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Data Visualization API",
      version: "1.0.0",
      description: "Real-time data API with Socket.io",
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000",
        description: "Local or deployed backend",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // scan for Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
