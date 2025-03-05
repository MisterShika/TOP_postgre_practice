const db = require("../db/queries");

async function getUsernames(req, res) {
    const usernames = await db.getAllUsernames();
    res.render("index", {
        title: "User list",
        users: usernames,
    });
}

async function createUsernameGet(req, res) {
    res.render("newUser", {
        title: "Create user",
    });
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}
  
module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost
};