import { Router } from "express";
import { userRoutes } from "./users-routes.js";
import { sessionsRoutes } from "./sessions-routes.js";
import { deliveriesRoutes } from "./deliveries-routes.js";
import { deliveriesLogsRoutes } from "./deliveries-logs-routes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveriesRoutes);
routes.use("/delivery-logs", deliveriesLogsRoutes);

export { routes };
