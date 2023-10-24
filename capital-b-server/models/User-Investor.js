const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: String, 
    email: String,
    password: String,
    // investor: [{ type: Schema.Types.ObjectId, ref: "Investor" }],
    location: String,
    // image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User-Investor", userSchema);

