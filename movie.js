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

//-------------movie table schema ---------
// let movieSequelize = sequelize.define('movie', {
//     movieId: {
//         primaryKey: true,
//         type: Sequelize.STRING
//     },
//     movieName: Sequelize.STRING,
//     type: Sequelize.STRING,
//     language: Sequelize.STRING,
//     cast: Sequelize.STRING
// },{
//     timestamps: false,
//     freezeTableName : true
// });

// movieSequelize.sync().then(() => {
//     console.log("table created successfully!");
// }).finally(() => {
//     sequelize.close();
// })

// movieSequelize.findAll({raw: true}).then((data)=>{
//     console.log(data);
// }).catch((err)=> {
//     console.error('error is',err);
// })