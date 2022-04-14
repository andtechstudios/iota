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

loadJSON("./params.json", onRead,'jsonp');

function onRead(info)
{
	document.title = info.title;
	const collection = document.getElementsByClassName("title");
	for (let i = 0; i < collection.length; i++) {
		collection[i].innerHTML = info.title;
	}

	const download = document.getElementById("download");
	download.href = info.downloadUrl;

	document.getElementById("filesize").textContent = info.displaySize;

	var date = new Date(info.timestamp);
	document.getElementById("timestamp").textContent = moment(date).fromNow();
	document.getElementById("timestamp-secondary").textContent = moment(date).format('MMM D, HH:mm');
}
