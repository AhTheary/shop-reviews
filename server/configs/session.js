var session = require('express-session')
//<<<<<<< HEAD
// let RedisStore = require("connect-redis")(session)
// const { createClient } = require("redis")
//=======
    // let RedisStore = require("connect-redis")(session)
    // const { createClient } = require("redis")
// >>>>>>> 02e1119a6793d2a4bc9ee9d79585394dc1d188cc

module.exports = async(app) => {
    // let redisClient = createClient({ url: 'redis://localhost:6379', legacyMode: true })
    // redisClient.connect().then(() => {
    //     console.log("Redis connected~");
    // }).catch(console.error)

    app.use(session({
        // store: new RedisStore({ client: redisClient }),
        secret: 'my-secret',
        resave: true,
        rolling: true,
        saveUninitialized: true,
        name: 'access_token',
        cookie: {
            maxAge: 1000 * 60 * 60 * 2, // 2 hours
            secure: false,
            httpOnly: false,
        }
    }))
}