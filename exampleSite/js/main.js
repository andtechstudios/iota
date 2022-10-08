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

function onReadMetadata(data)
{
	document.getElementById("filesize").textContent = data.displaySize;

	var date = new Date(data.timestamp);
	document.getElementById("timestamp").textContent = moment(date).fromNow();
	document.getElementById("timestamp-secondary").textContent = moment(date).format('MMM D, HH:mm');

	showNormalMetadata();
}

// Helper functions
const delay = ms => new Promise(res => setTimeout(res, ms));

function showNormalMetadata()
{
	document.getElementById("metadata-normal").style.display = "inline"
	document.getElementById("metadata-loading").style.display = "none"
}

function showLoadingMetadata()
{
	document.getElementById("metadata-normal").style.display = "none"
	document.getElementById("metadata-loading").style.display = "inline"
}

function inflateMetadata()
{
	showLoadingMetadata()

	loadJSON("./config.json", onReadConfig,'jsonp');
}

// Begin code
window.addEventListener('focus', async function () {
	showLoadingMetadata()

	await delay(666)

	inflateMetadata()
});
inflateMetadata()
