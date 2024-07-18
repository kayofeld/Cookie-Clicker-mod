// Define the image sources
// load config.json from url https://kayofeld.github.io/Cookie-Clicker-mod/config.json
var boyKisserConfig = {};

fetch('https://kayofeld.github.io/Cookie-Clicker-mod/config.json')
	.then((response) => response.json())
	.then(function (json) {
		boyKisserConfig = json;
		var ImagesPath = boyKisserConfig.Web.ImagesPath;
		var images = boyKisserConfig.Images;

		// replace the images
		for (var key in images) {
			Game.Loader.Replace(key, ImagesPath + images[key]);
		};

		var translations = {
			"%1 cookie": [
				"%1 boy kissed",
				"%1 boy kissed"
			]
		}
		if (ModLanguage('*', translations)) {
			console.log("Language updated");
		}
		else {
			console.log("Error while updating language");
		}

		var bakeryName = document.getElementById('bakeryName');
		bakeryName.innerHTML = 'Boy Kisser Game';
	}); 