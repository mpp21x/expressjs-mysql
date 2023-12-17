var getConnection = require('./src/db/connection');

(async () => {
    const connection = await getConnection();

    const users = [
        { name: "Alice", email: "alice@example.com", password: "password123" },
        { name: "Bob", email: "bob@example.com", password: "s3cur3p4ss" },
        // Add more users as needed
    ];

    for (const user of users) {
        console.log(user.email);
        const { name, email, password } = user;
        await connection.execute(
            "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
        );
    }
    process.exit(0);
})();
