import mongoose from "mongoose";

const followSchema = new mongoose.Schema(
    {
        follower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        followed: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    },
    {
        collection: "follows",
    }
);
followSchema.index({'follower' : 1, 'followed' : 1, }, {unique: true});


export default followSchema;