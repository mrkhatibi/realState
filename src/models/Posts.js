import { model, models, Schema } from "mongoose";

const postsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    published : {
      type : Boolean ,
      default : false
    },
    price: {
      type: Number,
      required: true,
    },
    realstate: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["villa", "apartment", "office", "shop"],
      required: true,
    },
    amenities: {
      type: [String],
      required: true,
    },
    rules: {
      type: [String],
      required: true,
    },
    constractionDate: {
      type: Date,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Posts = models.Posts || model("Posts", postsSchema);
export default Posts;
