import mongoose from "mongoose";
const likesSchema = new mongoose.Schema({
                                           bookId: { type: String},
                                           user: {type: mongoose.Schema.Types.ObjectId, ref:"users" },
                                       },
                                       { collection: "likes" });
likesSchema.index({'bookId' : 1, 'user' : 1}, {unique: true});

export default likesSchema;