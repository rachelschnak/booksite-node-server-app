import mongoose from "mongoose";
const authorsSchema = new mongoose.Schema({
                                        authorName: {type: String},
                                              bookId: { type: String},
                                              comment: {type: String},
                                       },
                                       { collection: "authorStuff" });
authorsSchema.index({'bookId' : 1, 'authorName' : 1}, {unique: true});

export default authorsSchema;