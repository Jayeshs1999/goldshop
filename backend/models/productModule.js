import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },

    rating: {
        type:Number,
        required: true
    },
    comment: {
        type:String,
        required: true
    },
},{
    timestamps:true
})

const productSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    user: {
      type: String, // Add a new field to store the UUID
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema)

export default Product;