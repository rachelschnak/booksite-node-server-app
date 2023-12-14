import * as dao from "./dao.js";

function AuthorRoutes(app) {

    const createAuthorComment = async (req, res) => {
        try {
            const userId = req.params.userId;
            const bookId = req.params.bookId;
            const comment = req.body;
            const comments = await dao.createAuthorComment(userId, bookId, comment);
            res.json(comments);
        } catch (error) {
            res.json({message: "User already follows user"})
        }
    };
    const deleteAuthorsComment = async (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;
        const status = await dao.deleteAuthorsComment(userId, bookId);
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
        const userId  = req.params.id;
        const bookId  = req.params.id;
        const comment = req.body;
        const status = await dao.updateAuthorComment(userId, bookId, comment);
    };


    app.post("/api/author/:userId/comment/:bookId", createAuthorComment);
    app.delete("/api/author/:userId/comment/:bookId", deleteAuthorsComment);
    app.get("/api/book/:bookId/comment", findAuthorComment);
    app.put("/api/author/:userId/comment/:bookId", updateAuthorComment);

}

export default AuthorRoutes;