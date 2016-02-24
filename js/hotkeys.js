var combinations = {
	"g": {name:"Google", url:"http://google.com"},
	"1": {name:"Outlook", url:"http://outlook.com"},
	"r": {name:"Reddit", url:"http://reddit.com"}
};
addEventListener("keyup", function(event){
	var key = String.fromCharCode(event.charCode);
	if(combinations[key]!=undefined){
		document.getElementsByClassName("container")[0].innerHTML = "<div class=\"col-xs-6 col-xs-offset-3\"><h1>Redirecting to "+combinations[key].name+"!</div";
		window.location = combinations[key].url;
	}
});
