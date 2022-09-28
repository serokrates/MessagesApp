const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const User = require("../models/userModel");
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getMessages = asyncHandler(async (req, res) => {
  // console.log(req.data);
  // console.log(req.params);
  // console.log(req.body);
  // console.log(req.user);
  // // console.log(req.user.id);
  // console.log(req.user.name);
  // console.log(req.name);
  // console.log("req.user.idreq.user.idreq.user.idreq.user.id", req.user.id);

  // const user2 = await User.findById(req.user.id);

  // console.log("useruseruseruse", user2.name);
  const messages = await Message.find({});
  console.log(messages);
  res.status(200).json(messages);
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setMessage = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const message = await Message.create({
    text: req.body.text,
    recipent: req.body.recipent,
    title: req.body.title,
  });

  res.status(200).json(message);
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
// const updateGoal = asyncHandler(async (req, res) => {
//   const message = await Message.findById(req.params.id);

//   if (!message) {
//     res.status(400);
//     throw new Error("Goal not found");
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   // Make sure the logged in user matches the goal user
//   if (message.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("User not authorized");
//   }

//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   res.status(200).json(updatedGoal);
// });

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
// const deleteGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id);

//   if (!goal) {
//     res.status(400);
//     throw new Error("Goal not found");
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401);
//     throw new Error("User not found");
//   }

//   // Make sure the logged in user matches the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("User not authorized");
//   }

//   await goal.remove();

//   res.status(200).json({ id: req.params.id });
// });

module.exports = {
  getMessages,
  setMessage,
};
