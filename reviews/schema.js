import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema({
                                           bookId: { type: String},
                                           user: {type: mongoose.Schema.Types.ObjectId, ref:"users" },
                                           review: {type: String, require: true},
                                       },
                                       { collection: "reviews" });
reviewsSchema.index({'bookId' : 1, 'user' : 1, }, {unique: true});

export default reviewsSchema;