//========= Time =========\\
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year;
  return time;
}
//========== Spiget ==========\\
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.sourceCodeLink).then((sourceCodeLink) =>(document.getElementById("source").href = sourceCodeLink)))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.updateDate).then((updateDate) =>(document.getElementById("latest").innerText = timeConverter(updateDate))))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.rating).then((json) => json.average).then((rating) =>(document.getElementById("stars").innerText = rating)).then((rating) =>(document.getElementById("stars").title = rating)))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.rating).then((json) => json.count).then((rating) =>(document.getElementById("count").innerText = "(" + rating + ")")))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.rating).then((json) => json.count).then((rating) =>(document.getElementById("aCount").href = "https://www.spigotmc.org/resources/" + pid + "/reviews")))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.releaseDate).then((releaseDate) =>(document.getElementById("release").innerText = timeConverter(releaseDate))))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.description).then((description) =>(document.getElementById("description").innerHTML = atob(description))))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.name).then((name) =>(document.getElementById("name").innerText = name)))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.downloads).then((downloads) =>(document.getElementById("downloads").innerText = downloads)))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid).then((response) => response.json()).then((json) => json.name).then((name) =>(document.getElementById("plugin_title").innerText = name)))();
(() => fetch("https://api.spiget.org/v2/resources/" + pid + "/versions/latest").then((response) => response.json()).then((json) => json.name).then((name) =>(document.getElementById("version").innerText = name)))();
//========== Handlebars ==========\\
(function(window, document, $, undefined) {
  'use strict'; var data,source,template;
  data = {
	pid: pid
  };
  source = $("#handelbar-script").html();
	template = Handlebars.compile(source);
	$('#handlebar-section').html(template(data)); 
})(window, document, jQuery);
//========== Rating ==========\\
setTimeout(function(){
	let stars = document.getElementById("stars").innerText;
	document.getElementById("stars").innerHTML = getStars(stars);
	function getStars(rating) {
	  rating = Math.round(rating * 2) / 2;
	  let output = [];
	  for (var i = rating; i >= 1; i--)
		output.push('<i class="fa fa-star" aria-hidden="true"></i>&nbsp;');
	  if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true"></i>&nbsp;');
	  for (let i = (5 - rating); i >= 1; i--)
		output.push('<i class="fa fa-star-o" aria-hidden="true"></i>&nbsp;');
	  return output.join('');
	}
}, 1000);
//========= Download =========\\
function openDownload() {
  document.getElementById("download-section").style.width = "100%";
}
function closeDownload() {
  document.getElementById("download-section").style.width = "0%";
}
//========= Timer =========\\
var timeleft = 5;
document.getElementById("timerElement").style.filter = "blur(3px)"
document.getElementById("downloadFrame").style.pointerEvents = "none"
var downloadTimer
function startTimer() {
	downloadTimer = setInterval(function(){
	  if(timeleft < 0){
		document.getElementById("timerElement").style.filter = "blur(0px)"
		document.getElementById("downloadFrame").style.pointerEvents = "auto"
		document.getElementById("timer").style.display = "none"
		clearInterval(downloadTimer);
	  }
	  document.getElementById("progressBar").value = 5 - timeleft;
	  timeleft -= 0.01;
	}, 5);
	return;
}    
function endTimer() {
	timeleft = 5;
	clearInterval(downloadTimer);
	document.getElementById("progressBar").value = 0;
}