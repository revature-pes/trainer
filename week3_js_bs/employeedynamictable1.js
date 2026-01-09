
var employees = []

function showTableData() {
	var table = "";
	var i = 0;
	for(let employee of employees) {
		let eachRow = "<tr>"
		
		eachRow += "<td>" + employee.username + "</td>"
		eachRow += "<td>" + employee.designation + "</td>"
		
		eachRow += "<td>  <input type='button' value='delete' onclick = 'deleteRecord(" + i +")'>  </td>"
		eachRow += "</tr>"
		table += eachRow
		i++;
	}
	idEmployeeTable.innerHTML = table;
}

function deleteRecord(index) {
	employees.splice(index, 1);
	showTableData();
}

function focusTextBox() {
	idemployeeDetails.focus();
}

function addEmployeeData() {
	if(idemployeeDetails.value.trim() == "") {
		alert("Record Not Entered")
		return false;
	}
	var employeeRecord = idemployeeDetails.value.split(' ');
	if(employeeRecord.length != 2) {
		alert("Improper Data Entered")	
		return false;
	}
	idemployeeDetails.value = "";
	idemployeeDetails.focus();
	var employee = {"username":employeeRecord[0],  "designation":employeeRecord[1]};
	employees.push(employee);
	showTableData();
}
