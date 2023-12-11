import * as dao from "./dao.js";
import {findReviewsByUser} from "./dao.js";

function ReviewRoutes(app) {
    const findAllReviews = async (req, res) => {};
    const createUserReviewsBook = async (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;
        const review = req.params.review;
        const response = await dao.createUserReviewsBook(userId, bookId, review);
        res.json(response);
    };
    const deleteUserReviewsBook = async (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;
        const status = await dao.deleteUserReviewsBook(userId, bookId);
        res.json(status);
    };

    const findReviewsByUser = async (req, res) => {
        const userId = req.params.userId;
        const reviews = await dao.findReviewsByUser(userId);
        res.json(reviews);
    };

    const findBookReviews = async (req, res) => {
        const bookId = req.params.bookId;
        const reviews = await dao.findBookReviews(bookId);
        res.json(reviews);
    };

    const updateReview = async (req, res) => {
        try {
            const userId = req.params.userId;
            const bookId = req.params.bookId
            const review = req.params.review;
            const status = await dao.updateReview(userId, bookId, review);
            res.json(status);
        } catch(error) {
            res.json({message: "didn't update review"})
        }
    };

    app.get("/api/reviews", findAllReviews);
    app.post("/api/users/:userId/reviews/:bookId/:review", createUserReviewsBook);
    app.put("/api/users/:userId/reviews/:bookId/:review", updateReview);
    app.delete("/api/users/:userId/reviews/:bookId", deleteUserReviewsBook);
    app.get("/api/users/:userId/reviews", findReviewsByUser);
    app.get("/api/reviews/:bookId", findBookReviews);
}

export default ReviewRoutes;