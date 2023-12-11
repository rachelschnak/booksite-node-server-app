import model from "./model.js";

export const findAllReviews = () => model.find();
export const createUserReviewsBook = (userId, bookId, review) =>
    model.create({ user: userId, bookId: bookId, review: review });
export const deleteUserReviewsBook = (userId, bookId) =>
    model.deleteOne({ user: userId, bookId: bookId });
export const findUsersThatReviewBook = (bookId) =>
    model.find({ bookId: bookId }).populate("user");
export const findReviewsByUser = (userId) => model.find({ user: userId });

export const findBookReviews = (bookId) =>
    model.find({bookId: bookId});

export const updateReview = (userId, bookId, review) =>
    model.updateOne({ user: userId, bookId: bookId}, { review });



