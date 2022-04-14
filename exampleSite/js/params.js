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

loadJSON("./data/constants.json", onReadConstants,'jsonp');
loadJSON("./data/metadata.json", onReadMetadata,'jsonp');

function onReadConstants(info)
{
	document.title = info.title;
	const collection = document.getElementsByClassName("title");
	for (let i = 0; i < collection.length; i++) {
		collection[i].innerHTML = info.title;
	}

	const download = document.getElementById("download");
	download.href = info.downloadUrl;
}

function onReadMetadata(data)
{
	document.getElementById("filesize").textContent = data.displaySize;

	var date = new Date(data.timestamp);
	document.getElementById("timestamp").textContent = moment(date).fromNow();
	document.getElementById("timestamp-secondary").textContent = moment(date).format('MMM D, HH:mm');
}
