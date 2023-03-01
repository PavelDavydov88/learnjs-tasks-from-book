let login = prompt("Input login");

if (login == null || login == "") {
	alert("Cancel")
} else  if (login != "Admin") {
		alert("I don't know you")
	} else  { let password = prompt("Input password")
       		if (password == null || password == "") {
			alert("Cancel")
		} else if (password != "I am boss") {
				alert("Wrong the password")}
			else  alert ("Hellow!")
		}	





