const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "Dipika1234",{
    host:"localhost",
    dialect:"postgres",
})
const connection = async()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection has been successfully established")
    }catch(error){
        console.log("Unable to connect to database", error);
    }
};

module.exports = {sequelize, connection};