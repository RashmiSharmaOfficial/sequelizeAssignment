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

//------------ employee table schema --------
let empTable = sequelize.define('EmpTable', {
    empId: {
        primaryKey: true,
        type: Sequelize.STRING
    },
    name: Sequelize.STRING,
    dept: Sequelize.STRING,
    designation: Sequelize.STRING
},{
   timestamps: false,
   freezeTableName : true 
});

// empTable.sync({force: true}).then(() => {
//     console.log("table created successfully!");
// }).finally(() => {
//     sequelize.close();
// })

/*
// ----- 6. In extension to above code (Employee table), Also display the record by Primary Key whose empid is 1200.  Have a record in the db with empid 1200.  (Use findByPk()).
empTable.findByPk(104).then((data)=>{
    console.log(data.dataValues);
}).catch((err)=> {
    console.error('error is',err);
})
*/



/*
//------- 7. Write a script to display all the records where name of the employee is your name.  (Add Where clause in the script.) 
empTable.findAll({where: {name: 'Rashmi Sharma'}, raw: true}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.error("error", err);
})
*/


/*
//------- 8. With Employee table, display all the employees with only fields Name and their department.
empTable.findAll({attributes: ['name', 'dept'], raw: true}).then((data)=>{
    console.log(data);
}).catch((err)=> {
    console.error('error is',err);
});
*/



/*
//  -------- 9. Add a condition to above script, display all the employees who are working in IT 
empTable.findAll({attributes: ['name', 'dept'], where:{dept: 'cse'}, raw: true}).then((data)=>{
    console.log(data);
}).catch((err)=> {
    console.error('error is',err);
});
*/



/*
// ------- 10. Count the number of rows in the employee table using findAndCountAll().
empTable.findAndCountAll().then((data)=>{
    console.log("number of records are: ", data.count);
}).catch((err)=> {
    console.error('error is',err);
})
*/


/*
// ---------- 11. Display all the records sorted on employee names.
empTable.findAll({order: ['name'], raw: true}).then((data)=>{
    console.log(data);
}).catch((err)=> {
    console.error('error is',err);
});
*/



/*
// ---------- 12. Display names of Employee table using like operator in sequelize.
const Op = Sequelize.Op;
empTable.findAll({
    where:{
        name:{
            [Op.like]: '%rma'
        }
    }, raw:true
}).then((data) => {
    console.log(data);
}).catch((err)=> {
    console.error("error is", err);
})
*/


/*
// --------- 13.  Write SQL queries for all the operations we have done till now and execute them using query() of sequelize.
sequelize.query("SELECT * FROM `EmpTable`", {type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
})
*/

/*
// -------- 15. Write a script to insert an employee into the employee table.
empTable.create({
    empId: 106,
    name: 'Peter',
    dept: 'EEE',
    designation: 'Engineer'
}).then((data) => {
    console.log("record inserted successfully!!", data);
}).catch((err) => {
    console.error("there is an error", err);
})
*/


/*
// --------- 16. Insert a new record in employee table using build() and save().
let empObj = empTable.build({empId: 105, name: 'Mansi', dept: 'CSE', designation: 'hod'});
empObj.save();
*/



// ------- 18. Update a record in employee table by changing your name to your full name (First name and Last name)
// empTable.update(
//     {name: 'Rashmi'},
//     {where: {name: 'Rashmi Sharma'}}
// ).then((data) => {
//     console.log("record updated successfully....");
// }).catch((err) => {
//     console.error("error ", err);
// });



// --------- 19. Delete a record from employee table and see the output.
// empTable.destroy({
//     where: {name: 'john'}
// }).then((data) => {
//     console.log("record deleted successfully!!");
// }).catch((err) => {
//     console.error("error", err);
// })

