import mongoose from "mongoose";
import schema from "./schema.js";
import authorsSchema from "./schema.js";
const model = mongoose.model("authorStuff", schema);
export default model;