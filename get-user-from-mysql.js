var getConnection = require('./src/db/connection');

(async ()=> {
    
    const conn = await getConnection();


    await conn.execute('SELECT * FROM user LIMIT 3');

    console.log('這個 console 必須等到第 8 行的非同步執行了，才會執行這一行');
    await conn.execute('SELECT COUNT(*) as total FROM user WHERE name = ?', ['Bob']);

    conn.execute('SELECT * FROM user LIMIT 3').then(()=>{
        console.log('1');
    });
    conn.execute('SELECT COUNT(*) as total FROM user WHERE name = ?', ['Bob']).then(()=>{
        console.log('2');
    });

    const allResult = await Promise.all([
        conn.execute('SELECT * FROM user LIMIT 3'),
        conn.execute('SELECT COUNT(*) as total FROM user WHERE name = ?', ['Bob'])
    ]);
    console.log('3');
    const users = allResult[0][0];
    const total = allResult[1][0][0].total;
    console.log(users);
    console.log(total);
})();