import mongoose from "mongoose";
const bookStatusSchema = new mongoose.Schema({
                                           bookId: { type: String},
                                           user: {type: mongoose.Schema.Types.ObjectId, ref:"users" },
                                            bookStatus: {
                                               type: String,
                                                enum: ["READ", "WANT TO READ", "READING", "DNF"],
                                                default: "READ" },
                                       },
                                       { collection: "bookStatus" });
bookStatusSchema.index({'bookId' : 1, 'user' : 1}, {unique: true});

export default bookStatusSchema;