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
	var platform = data.platforms[device.os];
	if (platform === undefined) {
		document.getElementById("supported").style.display = "none";
		document.getElementById("unsupported").style.display = "block";
		return;
	}

	console.log("allowed");
	document.getElementById("download").href = platform.downloadUrl;
	document.getElementById("os-icon").src = "static/svg/"+device.os+".svg";

	document.getElementById("supported").style.display = "block";
	document.getElementById("unsupported").style.display = "none";
	
	loadJSON(platform.metadataUrl, onReadMetadata,'jsonp');
}

// Begin code
loadJSON("./config.json", onReadConfig,'jsonp');
