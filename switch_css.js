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
	else if(link_tags==1){
		var link = document.createElement('link');
	    link.rel  = 'alternative stylesheet';
	    link.type = 'text/css';
	    link.href = 'switch2.css';
	    link.title="switch2"
	    var head  = document.getElementsByTagName('head')[0];
	    head.appendChild(link);
	    link_tags++;
	}
}());