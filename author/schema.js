import mongoose from "mongoose";
const authorsSchema = new mongoose.Schema({
                                        userId: {type: String, require: true},
                                              bookId: { type: String, require: true, unique: true},
                                              comment: {type: String, require: true},
                                       },
                                       { collection: "authorStuff" });

export default authorsSchema;