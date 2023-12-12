import mongoose from "mongoose";
import schema from "./schema.js";
import bookStatusSchema from "./schema.js";
const model = mongoose.model("bookStatus", schema);
export default model;