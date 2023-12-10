import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesBook = (userId, bookId) =>
    model.create({ user: userId, bookId: bookId });
export const deleteUserLikesBook = (userId, bookId) =>
    model.deleteOne({ user: userId, bookId: bookId });
export const findUsersThatLikeBook = (bookId) =>
    model.find({ bookId: bookId }).populate("user");
export const findBooksThatUserLikes = (userId) => model.find({ user: userId });



