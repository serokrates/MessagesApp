const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    recipent: {
      type: String,
      required: [true, "Please add a recipent name"],
    },
    title: {
      type: String,
      required: [true, "Please add a title name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
