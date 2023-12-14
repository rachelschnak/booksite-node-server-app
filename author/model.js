import mongoose from "mongoose";
import authorsSchema from "./schema.js";
const model = mongoose.model("authorStuff", authorsSchema);
export default model;