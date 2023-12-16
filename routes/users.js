var express = require('express');
var router = express.Router();
var getConnection = require('../src/db/connection');

// primary id = id
// foreign key = prefix + id

/* GET users listing. */
router.get('/', function(req, res) {
});

router.post('/login', async function(req, res) {
  const conn = await getConnection();
  const [data] = await conn.execute('SELECT * FROM user WHERE email = ? ', [req.body.email]);
  return res.json(data);
});

module.exports = router;
