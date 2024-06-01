import express from "express";
import {
  addRestaurant,
  getRestaurantById,
  listRestaurant,
  removeRestaurent,
  updateRestaurant,
} from "../controllers/restaurantController.js";

const restaurantRouter = express.Router();

restaurantRouter.post("/add", addRestaurant);
restaurantRouter.get("/list", listRestaurant);
restaurantRouter.delete("/:id", removeRestaurent);
restaurantRouter.get("/:id", getRestaurantById);
restaurantRouter.put("/:id", updateRestaurant);

export default restaurantRouter;
