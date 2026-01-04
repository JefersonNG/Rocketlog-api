import { Router } from "express";
import { DeliveriesLogsController } from "../controllers/deliveries-logs-controller.js";
import { ensureAuthenticated } from "../middlewares/ensure-authenticated.js";
import { verifyUserAuthorization } from "../middlewares/verify-user-authorization.js";

const deliveriesLogsRoutes = Router();
const deliveriesLogsController = new DeliveriesLogsController();

deliveriesLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveriesLogsController.create
);

deliveriesLogsRoutes.get(
  "/:delivery_id/show",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "customer"]),
  deliveriesLogsController.show
);

export { deliveriesLogsRoutes };
