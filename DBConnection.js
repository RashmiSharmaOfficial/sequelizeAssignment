var Sequelize = require('sequelize');
var dbConfig = require('./db.config');

var sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        min: dbConfig.pool.min,
        max: dbConfig.pool.max,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

//connect with db using authentication() of sequelize
sequelize.authenticate().then( () => {
    console.log("connected to database successfully...");
}).catch(err => {
    console.error("unable to connect to db, because ", err);
}).finally(() => {
    sequelize.close();
})