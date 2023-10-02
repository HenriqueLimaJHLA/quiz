
function Login(){
		var done = 0;
		var username = document.login.username.value;
		var password = document.login.password.value;
		
		if (username == "José" && password == "HzezinhoJ") {
			localStorage.setItem('Label','José Henrique')
			done = 1;
			window.location="./HTML/Prova.html";
			var name = localStorage.getItem('Label')
			alert("Seja Bem Vindo "+name+"!") 
		}
		else if (username == "José" && password != "HzezinhoJ") {
			alert("Usuário encontrado, mas a senha está incorreta.");
			done = 1;
		}
		if (username == "Rian" && password == "Mandrake") {
			localStorage.setItem('Label','Rian Sabino') 
			done=1;
			window.location="./HTML/Prova.html";
			var name = localStorage.getItem('Label')
			alert("Seja Bem Vindo "+name+"!")
		}
		else if(username =="Rian" && password != "Mandrake"){
			alert("Usuário encontrado, mas a senha está incorreta.");
			done = 1;
		}
		if (username == "Hilmer" && password == "Hilmer1234"){
			localStorage.setItem('Label','Gustavo Hilmer') 
			done=1;
			window.location="./HTML/Prova.html";
			var name = localStorage.getItem('Label')
			alert("Seja Bem Vindo "+name+"!")
		}
		else if (username =="Hilmer" && password != "Hilmer1234"){
		 	alert("Usuário encontrado, mas a senha está incorreta.");
			done = 1;	
		}
		if (done == 0) { 
		 	alert("Usuário ou senha inválidos.");
		}
		}
