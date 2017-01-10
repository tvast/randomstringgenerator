	var myVar = setInterval(function(){ 

		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 20; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		console.log(text) ;
		document.getElementById("foo").innerHTML= text

	}, 200);


	function myStopFunction() {


		clearInterval(myVar);
		document.getElementById("foo").innerHTML= "theophile vast	"
	}

	function reload()
	{	

		location.reload();


	}

	/* Open when someone clicks on the span element */
	function openNav() {
		document.getElementById("myNav").style.width = "100%";
	}

	/* Close when someone clicks on the "x" symbol inside the overlay */
	function closeNav() {
		document.getElementById("myNav").style.width = "0%";
	}