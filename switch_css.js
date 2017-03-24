(function changeCss(){
	var link_tags = 0;
	if(link_tags == 0){
		var link = document.createElement('link');
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'switch1.css';
	    link.title="switch1"
	    var head  = document.getElementsByTagName('head')[0];
	    head.appendChild(link);
	    link_tags++;
	}
}());