let EmployeeModel = require("../model/employee.model.js");


//retrive all the employee details
let getEmployeeDetails = (req,res) =>{
    EmployeeModel.find({},(err,result) =>{
        if(!err){
            res.json(result);
        }
    })
}
// get employee by specific id
let getEmployeeById = (req,res)=> {
    let eid = req.params.eid;       //passing id through path param 

    EmployeeModel.find({_id:eid},(err,employee)=> {
        if(!err){
            res.json(employee);
        }
    })
}
// create employee using the express API
let createEmployee = (req,res)=> {
   
    let employee = new EmployeeModel({
        name: req.body.name,
        email: req.body.email
    });

    employee.save((err,result)=> {
        if(!err){
            res.send("Employee Account  Created Successfully ")
        }else {
            res.send("Error Creating Employee Account ");
        }
    })

}
// deleteEmployee using specific ID
let deleteEmployeeById= (req,res)=> {
    console.log("In delete employee");
    let eid = req.params.eid;
    console.log(eid);
    EmployeeModel.deleteOne({_id:eid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Employee deleted successfully")
                }else {
                    res.send("Employee not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}
//update and change the password for the employee
let changePassword = (req,res) => {
    let eid = req.body._id;

    EmployeeModel.updateOne(
        { _id: eid }, 
        { $set: 
            {  
                password: req.body.password
            }
        }, 
    (err, result) => {
        if (!err) {
            if (result.nModified > 0) {
                res.send("Record updated succesfully")
            } else {
                res.send("Record is not available");
            }
        } else {
            res.send("Error generated " + err);
        }
    })
}

module.exports = {getEmployeeDetails,getEmployeeById,createEmployee,deleteEmployeeById ,changePassword}