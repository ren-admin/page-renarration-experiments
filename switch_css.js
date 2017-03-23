(function changeCss(){
	var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'switch1.css';
    var head  = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}());