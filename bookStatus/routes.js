import * as dao from "./dao.js";

function bookStatusRoutes(app) {

    const createUserBookStatus = async (req, res) => {
        try {
            const userId = req.params.userId;
            const bookId = req.params.bookId;
            const bookStatus = req.body.bookStatus
            const createStatus = await dao.createUserBookStatus(userId, bookId, bookStatus);
            res.json(createStatus);
        } catch (error) {
            res.json({message: "Cannot create status"})
        }
    };
    const deleteUserBookStatus = async (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;
        const status = await dao.deleteUserBookStatus(userId, bookId);
        res.json(status);
    };
    const findUsersWithBookStatus = async (req, res) => {
        const bookId = req.params.bookId;
        const statuses = await dao.findUsersWithBookStatus(bookId);
        res.json(statuses);
    };
    const findBookStatusesOfUser = async (req, res) => {
        const userId = req.params.userId;
        const statuses = await dao.findBookStatusesOfUser(userId);
        res.json(statuses);
    };

    const getBookStatusOfUser = async (req, res) => {
        try {
            const userId = req.params.userId;
            const bookId = req.params.bookId;
            const status = await dao.getBookStatusOfUser(userId, bookId);
            res.json(status);
        } catch (error) {
            res.json({message: "Cannot get book status of user"})
        }

    };

    const updateBookStatus = async (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;
        const updatedBookStatus = req.body.bookStatus
        const status = await dao.updateBookStatus(userId, bookId, updatedBookStatus);
        res.json(status);

    };


    app.post("/api/users/:userId/bookStatus/:bookId", createUserBookStatus);
    app.put("/api/users/:userId/bookStatus/:bookId", updateBookStatus);
    app.delete("/api/users/:userId/bookStatus/:bookId", deleteUserBookStatus);
    app.get("/api/bookStatus/:bookId/users", findUsersWithBookStatus);
    app.get("/api/users/:userId/bookStatus/:bookId", getBookStatusOfUser);
    app.get("/api/users/:userId/bookStatus", findBookStatusesOfUser);

}

export default bookStatusRoutes;