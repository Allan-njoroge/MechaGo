const db = require('../config/db');

class User {
  static async createUser(email, password, name) {
    try {
      const [result] = await db.execute(
        'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
        [email, password, name]
      );
      return result.insertId;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getUserByEmail(email) {
    try {
      const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
      return rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = User;
