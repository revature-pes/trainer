
var arr = []

function showTableData() {
	var table = "";
	var i = 0;
	for(var jStud1 of arr) {
		var eachRow = "<tr>"
		
		eachRow += "<td>" + jEmployee1.username + "</td>"
		eachRow += "<td>" + jEmployee1.designation + "</td>"
		
		eachRow += "<td>  <input type='button' value='delete' onclick = 'deleteRecord(" + i +")'>  </td>"
		eachRow += "</tr>"
		table += eachRow
		i++;
	}
	idEmployeeTable.innerHTML = table;
}

function deleteRecord(index) {
	arr.splice(index, 1);
	showTableData();
}

function addEmployeeData() {
	if(idemployeeDetails.value.trim() == "") {
		alert("Record Not Entered")
		return false;
	}
	var studRecord = idemployeeDetails.value.split(' ');//Copy textbox data into the Array
	if(studRecord.length != 2) {
		alert("Improper Data Entered")
		idemployeeDetails.value = "";
		idemployeeDetails.focus();
		return false;
	}
	
	var jStud = { "username":studRecord[0], "designation":studRecord[1]};
	arr.push(jStud);
	showTableData();
}
