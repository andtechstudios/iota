var ts = document.getElementById("timestamp").textContent;
var date = new Date(ts);

document.getElementById("timestamp").textContent = moment(date).format('YYYY MMMM DD [at] HH:mm');