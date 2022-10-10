const { app } = require('./app');

// utils

const { connectMongo } = require('./utils/database.util')

const startServer = async () => {
    await connectMongo();

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log('Express app running!!', PORT);
    })
}

startServer();