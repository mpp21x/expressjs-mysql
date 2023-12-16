var getConnection = require('./src/db/connection');

(async ()=> {
    
    const conn = await getConnection();
    const [data] = await conn.execute('SELECT * FROM user WHERE email = ? ', ['john@gmail.com']);
    console.log(data);
})();
// destructuring