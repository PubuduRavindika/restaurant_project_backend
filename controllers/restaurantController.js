import restaurantModel from "../models/restaurantModel.js";

//add restaurant
const addRestaurant = async (req, res) => {
  const restaurant = new restaurantModel({
    name: req.body.name,
    address: req.body.address,
    telephone: req.body.telephone,
  });
  try {
    await restaurant.save();
    res.json({ success: true, message: "Restaurant Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in adding restaurant" });
  }
};

// all restaurent list
const listRestaurant = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    res.json({ success: true, data: restaurants });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in fetching restaurants" });
  }
};

// remove restaurant
const removeRestaurent = async (req, res) => {
  try {
    await restaurantModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Restaurant removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in removing restaurant" });
  }
};

// get retaurent by id
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await restaurantModel.findById(req.params.id);
    res.json({ success: true, data: restaurant });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in fetching restaurant" });
  }
};

// update restaurant
const updateRestaurant = async (req, res) => {
  try {
    const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    res.json({ success: true, data: updatedRestaurant });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in updating restaurant" });
  }
};

export {
  addRestaurant,
  listRestaurant,
  removeRestaurent,
  getRestaurantById,
  updateRestaurant,
};
