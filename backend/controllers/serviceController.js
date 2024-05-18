const db = require('../config/db');

exports.requestService = async (req, res) => {
  const { location, serviceType } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO service_requests (user_id, location, service_type) VALUES (?, ?, ?)',
      [req.userId, location, serviceType]
    );
    res.status(201).json({ requestId: result.insertId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
