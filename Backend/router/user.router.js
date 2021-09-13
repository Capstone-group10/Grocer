let express = require("express");
let router = express.Router();

let EmployeeController = require("../controller/employee.controller.js");

router.get("/retrieveEmployeeById/:eid",EmployeeController.getEmployeeById)
router.post("/createEmployee",EmployeeController.createEmployee);
router.put("/changePassword",EmployeeController.changePassword)
router.delete("/deleteEmployeeById/:eid",EmployeeController.deleteEmployeeById);
router.get("/allEmployeeDetails",EmployeeController.getEmployeeDetails);

module.exports = router;