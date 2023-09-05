require ("dotenv").config()

const AppConfig = {

    TestURL: process.env.WEBAPP_URL

}

console.log("WEBAPP_URL:", process.env.WEBAPP_URL);

module.exports = AppConfig