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

//----------- student table schema -------
let studentObj = sequelize.define('studentTable', {
    studId: {
        primaryKey: true,
        type:Sequelize.STRING},
    name: Sequelize.STRING,
    stream: Sequelize.STRING,
    marks: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName : true
});

// studentObj.sync({force: true}).then(() => {
//     console.log("table created successfully!");
// }).finally(() => {
//     sequelize.close();
// })



/*
//-------- 14. Write the script to  display all the students whose are in CS Stream and have got more 75%. (Use Op.and)

const Op = Sequelize.Op;
studentObj.findAll({
    where:{
        stream:'cse',
        [Op.and]: 75
    }, raw:true
}).then((data) => {
    console.log(data);
}).catch((err)=> {
    console.error("error is", err);
})

*/


/*
// --------  17. Insrt set of records in student table using createBulk()
studentObj.bulkCreate([
    {studId: 107, name: 'Seema', stream: 'ece', marks: 89},
    {studId: 108, name: 'Riya', stream: 'eee', marks: 99},
    {studId: 109, name: 'Ziya', stream: 'eee', marks: 69}
]).then((data) => {
    console.log('record inserted successfully', data);
}).catch((err)=>{
    console.error('error', err);
})
*/


// ---------- 20. Drop the Student table using drop() and check the output.
// studentObj.drop().then(() => {
//     console.log("dropped");
// })