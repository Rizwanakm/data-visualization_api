// src/swagger.ts

// @ts-ignore TS7016: swagger-jsdoc has no type definitions
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

// Swagger options
const options: swaggerJSDoc.Options = {
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
        
      },
    ],
  },
  // Files containing Swagger annotations
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

// Generate Swagger specification
const swaggerSpec = swaggerJSDoc(options);

// Setup function to add Swagger UI to Express app
export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
