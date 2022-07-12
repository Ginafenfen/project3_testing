const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    immutable: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  members: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Board", BoardSchema);
