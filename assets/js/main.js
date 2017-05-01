function generateCaptcha(){

	var captcha = document.getElementById("imgCaptcha");

	var lowercase	= ["abcdefghijklmnñopqrstuvwxyz"];
	var uppercase	= ["ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"];
	var numbers		= ["0123456789"];
	var data		= (lowercase + uppercase + numbers).split("");

	var cod1 = data[Math.floor(Math.random() * data.length)];
	var cod2 = data[Math.floor(Math.random() * data.length)];
	var cod3 = data[Math.floor(Math.random() * data.length)];
	var cod4 = data[Math.floor(Math.random() * data.length)];
	var cod5 = data[Math.floor(Math.random() * data.length)];
	var cod6 = data[Math.floor(Math.random() * data.length)];
	var cod7 = data[Math.floor(Math.random() * data.length)];
	var cod8 = data[Math.floor(Math.random() * data.length)];
	var cod9 = data[Math.floor(Math.random() * data.length)];

	var codeCaptcha = cod1 + cod2 + cod3 + cod4 + cod5 + cod6 + cod7 + cod8 + cod9;

	var r = Math.round(Math.random()*255);
	var g = Math.round(Math.random()*255);
	var b = Math.round(Math.random()*255);

	var color = "rgb(" + r + "," + g + "," + b + ")"

	captcha.style.color = color;
	captcha.value = codeCaptcha;
};

window.onload = function(){

	generateCaptcha();

	var refresh = document.getElementById("refreshCaptcha");

		refresh.addEventListener("click", function(){
			generateCaptcha();
		});

	var send = document.getElementById("sendCaptcha");

		send.addEventListener("click", function(){

			var insert = document.getElementById("insertCaptcha");
			var captcha = document.getElementById("imgCaptcha");

			if(insert.value != captcha.value){
				alert("¡Uy! Parece que no coincide :c");
				generateCaptcha();
				insert.value = ""
			}else{
				alert("¡Bien hecho!");
				generateCaptcha();
				insert.value = ""
			}

		});

};