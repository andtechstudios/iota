function loadJSON(path, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		success(JSON.parse(xhr.responseText));
		}
		else {
		error(xhr);
		}
	}
	};
	xhr.open('GET', path, true);
	xhr.send();
}

// Callbacks
function onReadMetadata(data)
{
	document.getElementById("filesize").textContent = data.displaySize;

	var date = new Date(data.timestamp);
	document.getElementById("timestamp").textContent = moment(date).fromNow();
	document.getElementById("timestamp-secondary").textContent = moment(date).format('MMM D, HH:mm');
}

function onReadConfig(data)
{
	// Get platform key
	var key = device.os;
	var hash = window.location.hash.substr(1);
	if(!(hash === "")){
		key = hash;
	}
	
	var platform = data.platforms[key];
	if (platform === undefined) {
		document.getElementById("supported").style.display = "none";
		document.getElementById("unsupported").style.display = "block";
		return;
	}

	var icon = platform.icon;
	if (icon === "" || icon === undefined)
	{
		icon = key;
	}

	document.getElementById("download").href = platform.downloadUrl;
	document.getElementById("os-icon").src = "static/svg/"+icon+".svg";

	document.getElementById("supported").style.display = "block";
	document.getElementById("unsupported").style.display = "none";
	
	loadJSON(platform.metadataUrl, onReadMetadata,'jsonp');
}

// Begin code
loadJSON("./config.json", onReadConfig,'jsonp');
