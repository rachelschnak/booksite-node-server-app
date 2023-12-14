import model from "./model.js";

export const createAuthorComment = (userId, bookId, comment) =>
    model.create({ userId: userId, bookId: bookId, comment: comment});
export const deleteAuthorsComment = (bookId) =>
    model.deleteOne({ bookId: bookId });
export const findAuthorComment = (bookId) => model.findOne({ bookId: bookId });

export const updateAuthorComment = (userId, bookId, comment) =>
    model.updateOne({userId: userId, bookId: bookId  }, { comment: comment });

