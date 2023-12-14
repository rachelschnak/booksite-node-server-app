import model from "./model.js";

export const createAuthorComment = (userId, bookId, comment) =>
    model.create({ user: userId, bookId: bookId, comment: comment});
export const deleteAuthorsComment = (userId, bookId) =>
    model.deleteOne({ user: userId, bookId: bookId });
export const findAuthorComment = (bookId) => model.findOne({ bookId: bookId });

export const updateAuthorComment = (userId, bookId, comment) =>
    model.updateOne({user: userId, bookId: bookId  }, { comment: comment });

