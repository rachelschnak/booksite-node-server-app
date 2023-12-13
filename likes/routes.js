import * as dao from "./dao.js";

function LikesRoutes(app) {
    const findAllLikes = async (req, res) => {
        const likes = await dao.findAllLikes();
        res.json(likes);
    };


    const createUserLikesBook = async (req, res) => {
        try {
            const userId = req.params.userId;
            const bookId = req.params.bookId;
            const likes = await dao.createUserLikesBook(userId, bookId);
            res.json(likes);
        } catch (error) {
            res.json({message: "User already follows user"})
        }
    };
    const deleteUserLikesBook = async (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;
        const status = await dao.deleteUserLikesBook(userId, bookId);
        res.json(status);
    };
    const findUsersThatLikeBook = async (req, res) => {
        try {
            const bookId = req.params.bookId;
            const likes = await dao.findUsersThatLikeBook(bookId);
            res.json(likes);
        } catch (error) {
            res.json({message: "didnt get book likes"})
        }
    };
    const findBooksThatUserLikes = async (req, res) => {
        const userId = req.params.userId;
        const likes = await dao.findBooksThatUserLikes(userId);
        res.json(likes);
    };

    app.get("/api/likes", findAllLikes);
    app.post("/api/users/:userId/likes/:bookId", createUserLikesBook);
    app.delete("/api/users/:userId/likes/:bookId", deleteUserLikesBook);
    app.get("/api/likes/:bookId/users", findUsersThatLikeBook);
    app.get("/api/users/:userId/likes", findBooksThatUserLikes);
}

export default LikesRoutes;