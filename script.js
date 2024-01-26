function submitForm() {
	let First=document.getElementById("First-name").value;
	let Last=document.getElementById("Last-name").value;
	let Phone=document.getElementById("Phone-number").value;
	let Email=document.getElementById("Email").value;

	  var result="First Name:"+First+"\n"
    +"Last Name:"+Last+"\n"
    +"Phone Number:"+Phone+"\n"
    +"Email ID:"+Email+"\n"
	alert(result);
		  }