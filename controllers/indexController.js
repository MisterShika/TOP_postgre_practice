const db = require("../db/queries");

async function getUsernames(req, res) {
    if(req.query.search){
        const searchedUser = await db.getUser(req.query.search);
        console.log(searchedUser);
        res.render("index", {
            title: "Search",
            users: searchedUser,
            searchData: true
        });
    }else{
        const usernames = await db.getAllUsernames();
        res.render("index", {
            title: "User list",
            users: usernames,
        });
    }
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

async function deleteUser(req, res) {
    console.log("Delete user");
    const id = req.query.id;
    await db.deleteUser(id);
    res.redirect("/");
}
  
module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteUser
};