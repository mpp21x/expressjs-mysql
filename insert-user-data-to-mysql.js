var getConnection = require('./src/db/connection');

(async ()=>{
    const connection = await getConnection();
    
    const [result] = await connection.execute('INSERT INTO user (name, email, password) VALUES (?, ?, ?)', ['Kevin', 'kevin@gmail.com', '1234']);
    process.exit(0);
})();
