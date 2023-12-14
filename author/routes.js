import * as dao from "./dao.js";

function AuthorRoutes(app) {

    const createAuthorComment = async (req, res) => {
        try {
            const userId = req.params.userId;
            const bookId = req.params.bookId;
            const comment = req.params.comment;
            const response = await dao.createAuthorComment(userId, bookId, comment);
            res.json(response);
        } catch (error) {
            res.json({message: "Error author creating comment"})
        }
    };
    const deleteAuthorsComment = async (req, res) => {
        const bookId = req.params.bookId;
        const status = await dao.deleteAuthorsComment(bookId);
        res.json(status);
    };
    const findAuthorComment = async (req, res) => {
        try {
            const bookId = req.params.bookId;
            const comment = await dao.findAuthorComment(bookId);
            res.json(comment);
        } catch (error) {
            res.json({message: "didnt get author comment"})
        }
    };

    const updateAuthorComment = async (req, res) => {
        const userId  = req.params.userId;
        const bookId  = req.params.bookId;
        const comment = req.params.comment;
        const status = await dao.updateAuthorComment(userId, bookId, comment);
        res.json(status);
    };


    app.post("/api/author/:userId/comment/:bookId/:comment", createAuthorComment);
    app.delete("/api/comment/:bookId", deleteAuthorsComment);
    app.get("/api/book/:bookId/comment", findAuthorComment);
    app.put("/api/author/:userId/comment/:bookId/:comment", updateAuthorComment);

}

export default AuthorRoutes;