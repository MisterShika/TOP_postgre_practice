const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getUser(username){
  const result = await pool.query("SELECT * FROM usernames WHERE username ILIKE $1", [`%${username}%`]);
  return result.rows;
}

async function deleteUser(id){
  await pool.query("DELETE FROM usernames WHERE id = $1", [id]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getUser,
  deleteUser
};
