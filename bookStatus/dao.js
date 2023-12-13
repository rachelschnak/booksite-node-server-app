import model from "./model.js";

export const createUserBookStatus = (userId, bookId, bookStatus) =>
    model.create({ user: userId, bookId: bookId, bookStatus: bookStatus });
export const deleteUserBookStatus = (userId, bookId) =>
    model.deleteOne({ user: userId, bookId: bookId });
export const findUsersWithBookStatus = (bookId) =>
    model.find({ bookId: bookId }).populate("user");
export const findBookStatusesOfUser = (userId) => model.find({ user: userId });

export const updateBookStatus = (userId, bookId, bookStatus) =>
    model.updateOne({ user: userId, bookId: bookId }, { bookStatus: bookStatus});

export const getBookStatusOfUser = (userId, bookId) => model.findOne({ user: userId , bookId: bookId});

export const findAllStatuses = () => model.find();




